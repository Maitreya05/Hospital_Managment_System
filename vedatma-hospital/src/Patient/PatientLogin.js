import React, { useState, useEffect } from 'react';
import { Phone, Lock, Eye, EyeOff } from 'lucide-react';
import hospitalLogo from '../images/vedatma-logo.png';
import './PatientLogin.css'; 

const PatientLogin = ({ onBack, onRegister, onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Hardcoded credentials for testing
  const validPhone = "9503730933";
  const validPassword = "patient";

  // Validate inputs in real-time: phone must be 10 digits, password non-empty
  useEffect(() => {
    const phoneValid = /^\d{10}$/.test(phoneNumber);
    const passwordValid = password.trim() !== '';
    setIsValid(phoneValid && passwordValid);
  }, [phoneNumber, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (phoneNumber === validPhone && password === validPassword) {
        const userData = {
          name: "Manish Patil",
          phone: phoneNumber,
          id: "PAT001",
          email: "manish.patil@example.com"
        };
        if (onLoginSuccess) {
          onLoginSuccess(userData);
        }
      } else {
        setError('Invalid phone number or password.');
      }
    }, 1000);
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality to be implemented');
  };

  return (
    <div className="login-container">
      {/* Hospital Logo */}
      <img 
        src={hospitalLogo} 
        alt="Vedatma Hospital Logo" 
        className="login-logo"
      />

      {/* Back Button */}
      <button onClick={onBack} className="back-button">
        ← Back to Home
      </button>

      {/* Login Card */}
      <div className="login-card">
        {/* Patient Icon */}
        <div className="login-patient-icon">
          <div className="patient-icon-circle">
            <div className="patient-icon-inner">
              <span className="patient-icon-plus">+</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="login-title">Patient Login</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">
          {/* Phone Number */}
          <div className="form-group">
            <label className="form-label">
              <Phone className="form-icon" />
              Phone number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="form-input"
              required
            />
          </div>

          {/* Password Field with toggle */}
          <div className="form-group">
            <label className="form-label">
              <Lock className="form-icon" />
              Password*
            </label>
            <div className="password-container" style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="forgot-password-container">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="forgot-password-link"
            >
              Forget Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isValid || loading}
            className={`login-button ${!isValid || loading ? 'disabled-btn' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Show error if login fails */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </form>

        {/* Register Link */}
        <div className="register-link-container">
          <button onClick={onRegister} className="register-link">
            New User? Register here!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
