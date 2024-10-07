import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check user credentials (this should be replaced with proper backend validation)
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAuthenticated', "true"); // Store as a string
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
