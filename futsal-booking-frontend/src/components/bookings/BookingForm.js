import React, { useState } from 'react';

function BookingForm({ booking }) {
  const [date, setDate] = useState(booking ? booking.date : '');
  const [fieldId, setFieldId] = useState(booking ? booking.fieldId : '');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const method = booking ? 'PUT' : 'POST';
    const url = booking ? `http://localhost:3000/bookings/${booking.id}` : 'http://localhost:3000/bookings';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ date, fieldId })
      });
      if (!response.ok) throw new Error('Problem submitting booking form');
      alert('Booking successfully submitted!');
    } catch (error) {
      console.error('Failed to submit booking:', error);
      alert('Failed to submit booking.');
    }
  };

  return (
    <div>
      <h1>{booking ? 'Edit Booking' : 'New Booking'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </label>
        <label>
          Field ID:
          <input type="text" value={fieldId} onChange={e => setFieldId(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
