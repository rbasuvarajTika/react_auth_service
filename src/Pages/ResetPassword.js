import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      // You should replace 'resetToken' with the actual reset token obtained from the URL
      await axios.post('/api/reset-password', { resetToken: 'resetToken', newPassword: password });
      setMessage('Password reset successfully.');
    } catch (error) {
      setMessage('Error resetting password.');
    }
  };

  return (
    <div className='container'>
      <h2>Reset Password</h2>
      <input
      className='input'
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className='input'
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className='button' onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;
