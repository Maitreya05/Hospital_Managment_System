import React, { useState, useEffect } from 'react';
import { Phone, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import hospitalLogo from '../images/vedatma-logo.png';
import './DoctorLogin.css';

const DoctorLogin = ({ onBack, onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Hardcoded credentials
  const validPhone = "9503730933";
  const validPassword = "doctor";

  // Real-time validation
  useEffect(() => {
    const phoneValid = /^\d{10}$/.test(phoneNumber); // must be 10 digits
    // const passwordValid = password.length >= 6; // at least 6 chars
    const passwordValid = password.trim() !== '';
    setIsValid(phoneValid && passwordValid);
  }, [phoneNumber, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!phoneNumber || !password) {
      setError('Please fill out all fields.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);

      if (phoneNumber === validPhone && password === validPassword) {
        onLoginSuccess({
          name: "Dr. Mahesh Patil",
          phone: phoneNumber,
          id: "DOC001"
        });
      } else {
        setError('Invalid phone number or password.');
      }
    }, 1000);
  };

  return (
    <div className="doctor-login-container">
      {/* Back to Home */}
      <button onClick={onBack} className="back-to-home">
        <ArrowLeft size={16} />
        Back to Home
      </button>

      {/* Logo */}
      <div className="logo-container">
        <img 
          src={hospitalLogo} 
          alt="Vedatma Ayurvedalaya" 
          className="hospital-logo"
        />
      </div>

      {/* Login Card */}
      <div className="login-card">
        {/* Doctor Icon */}
        <div className="user-icon doctor-icon-bg">
          <div className="icon-inner">
            <span className="plus-sign">+</span>
          </div>
        </div>

        <h1 className="login-title">Doctor Login</h1>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Phone Number */}
          <div className="input-group">
            <label className="input-label">
              <Phone size={16} />
              Phone number
            </label>
            <div className="input-wrapper">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="input-field"
                required
              />
              {phoneNumber && !/^\d{10}$/.test(phoneNumber) && (
                <div className="error-tooltip">Phone must be 10 digits.</div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <label className="input-label">
              <Lock size={16} />
              Password*
            </label>
            <div className="input-wrapper">
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  className="input-field"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {password && password.length < 6 && (
                <div className="error-tooltip">Password must be at least 6 characters.</div>
              )}
            </div>
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#" className="forgot-link">Forget Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isValid || loading}
            className={`login-button doctor-login-btn ${!isValid ? 'disabled-btn' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Show error if any */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
