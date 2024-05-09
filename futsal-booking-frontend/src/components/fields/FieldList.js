import React, { useEffect, useState } from 'react';

function FieldList() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch('http://localhost:3000/fields', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`  // Ensure you are handling authentication
          }
        });
        const data = await response.json();
        if (response.ok) {
          setFields(data);
        } else {
          throw new Error(data.message || 'Failed to fetch fields');
        }
      } catch (error) {
        console.error('Error fetching fields:', error);
      }
    };

    fetchFields();
  }, []);

  return (
    <div>
      <h1>Available Fields</h1>
      <ul>
        {fields.map(field => (
          <li key={field.id}>
            {field.name} - Location: {field.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldList;

<div className="container list">
  <h1>Available Fields</h1>
  <ul>
    {fields.map(field => (
      <li key={field.id}>
        {field.name} - Location: {field.location}
      </li>
    ))}
  </ul>
</div>

