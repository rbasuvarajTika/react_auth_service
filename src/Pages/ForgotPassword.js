import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('/api/forgot-password', { email });
      alert('Password reset email sent.');
    } catch (error) {
      alert('Error sending reset email.');
    }
  };

  return (
    <div className='container'>
      <h2>Forgot Password</h2>
      <input 
      className='input'
        const type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
      className='button'
      onClick={handleForgotPassword}>Send Reset Email</button>
    </div>
  );
};

export default ForgotPassword;