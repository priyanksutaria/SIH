import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card, CardContent } from '@mui/material';
import './AuthPage.css';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrors({});
    setFormData({ name: '', email: '', username: '', password: '', confirmPassword: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (isSignup) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.username) newErrors.username = 'Username is required';
      if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    } else {
      if (!formData.email) newErrors.email = 'Email or Username is required';
      if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <CardContent>
          <Typography variant="h4" className="auth-title">
            {isSignup ? 'Sign Up' : 'Login'}
          </Typography>
          <Box component="form" className="auth-form" onSubmit={handleSubmit}>
            {isSignup ? (
              <>
                {/* Sign Up Form */}
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  error={!!errors.username}
                  helperText={errors.username}
                />
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  margin="normal"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </>
            ) : (
              <>
                {/* Login Form */}
                <TextField
                  fullWidth
                  label="Username or Email"
                  variant="outlined"
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </>
            )}
            <div className="auth-button">
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {isSignup ? 'Sign Up' : 'Login'}
              </Button>
            </div>
            <div className="toggle-link">
              <Typography variant="body2" onClick={toggleForm}>
                {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
