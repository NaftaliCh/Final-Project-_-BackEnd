import React, { useEffect, useState } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:3000/bookings/user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setBookings(data);
        } else {
          throw new Error(data.message || 'Failed to fetch bookings');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{`Booking ID: ${booking.id}, Status: ${booking.status}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;

<div className="container list">
  <h1>Your Bookings</h1>
  <ul>
    {bookings.map(booking => (
      <li key={booking.id}>{`Booking on ${booking.date} for Field ${booking.fieldId} - Status: ${booking.status}`}</li>
    ))}
  </ul>
</div>

