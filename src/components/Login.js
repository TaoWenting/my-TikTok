import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import '../components/styles/sharedStyles.css';  // Import the centralized stylesheet

const Login = ({ onLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { isAuthenticated, user, error } = useSelector(state => state.auth);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      onLogin(user.id); // Assuming user object has an 'id' property
      navigate('/user'); // Redirect to the user page
    }
  }, [isAuthenticated, user, onLogin, navigate]);

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          className="form-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          className="form-field"
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
      {error && <p className="error-message">{error.message || error}</p>}
    </div>
  );
};

export default Login;
