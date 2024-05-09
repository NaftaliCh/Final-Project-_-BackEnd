import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:3000/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setUserInfo(data);
        } else {
          throw new Error(data.message || 'Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {userInfo ? (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
} export default Dashboard;

<div className="container dashboard">
  <h1>Dashboard</h1>
  <div>Welcome, {user.name}</div>
  <div>Email: {user.email}</div>
  {/* Tambahkan lebih banyak informasi pengguna atau konten relevan lainnya di sini */}
</div>
