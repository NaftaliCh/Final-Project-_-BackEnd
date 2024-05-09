import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        history.push('/');
      } else {
        throw new Error(data.message || 'Failed to register');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
} export default Register;

<div className="container auth-form">
  <h1>Register</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    <button type="submit">Register</button>
  </form>
</div>
