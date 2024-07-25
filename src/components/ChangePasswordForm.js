import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../redux/actions/authActions';

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setMessage({ type: 'error', text: error });
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: "New password and confirm password do not match" });
      return;
    }

    dispatch(changePassword({ currentPassword, newPassword }, token))
      .then(() => {
        setMessage({ type: 'success', text: "Password changed successfully" });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      })
      .catch((err) => {
        setMessage({ type: 'error', text: err.message || "Failed to change password" });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Current Password:</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Confirm New Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {message && (
        <p style={{ color: message.type === 'error' ? 'red' : 'green' }}>{message.text}</p>
      )}
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
