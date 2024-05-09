import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the login API
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        history.push('/dashboard');
      } else {
        throw new Error(data.message || 'Unable to login');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
} export default Login;

<div className="container auth-form">
  <h1>Login</h1>
  <form onSubmit={handleSubmit}>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</div>
