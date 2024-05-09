import React, { useState, useEffect } from 'react';

function FieldForm({ field }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isNew, setIsNew] = useState(true);

  // Inisialisasi state jika mengedit lapangan yang ada
  useEffect(() => {
    if (field) {
      setName(field.name);
      setLocation(field.location);
      setIsNew(false); // Set flag bahwa ini bukan lapangan baru
    }
  }, [field]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const method = isNew ? 'POST' : 'PUT';
    const url = isNew ? 'http://localhost:3000/fields' : `http://localhost:3000/fields/${field.id}`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name, location })
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Field ${isNew ? 'created' : 'updated'} successfully: ${data.name}`);
      } else {
        throw new Error(data.message || `Failed to ${isNew ? 'create' : 'update'} field`);
      }
    } catch (error) {
      console.error(`Error ${isNew ? 'creating' : 'updating'} field:`, error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>{isNew ? 'Add New Field' : 'Edit Field'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <button type="submit">{isNew ? 'Create Field' : 'Update Field'}</button>
      </form>
    </div>
  );
}

export default FieldForm;
