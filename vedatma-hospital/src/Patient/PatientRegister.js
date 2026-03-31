import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Calendar } from 'lucide-react';
import './PatientRegister.css';
import hospitalLogo from '../images/vedatma-logo.png';

const PatientRegister = ({ onBack, onLoginClick }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Patient registration data:', formData);
    alert('Patient registration functionality to be implemented');
  };

  return (
    <div className="register-container">
      {/* Hospital Logo - Top Right */}
      <img 
        src={hospitalLogo} 
        alt="Vedatma Hospital Logo" 
        className="register-logo"
      />

      {/* Back Button - Top Left */}
      <button 
        onClick={onBack}
        className="register-back-button"
      >
        ← Back to Login
      </button>

      {/* Registration Card */}
      <div className="register-card">
        {/* Patient Icon */}
        <div className="register-patient-icon">
          <div className="register-patient-icon-circle">
            <div className="register-patient-icon-inner">
              <span className="register-patient-icon-plus">+</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="register-title">Patient Register</h2>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="register-form">
          {/* Full Name Field */}
          <div className="register-form-group">
            <label className="register-form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"  
              className="register-form-input"
              required
            />
          </div>

          {/* Email Address Field */}
          <div className="register-form-group">
            <label className="register-form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"  
              className="register-form-input"
              required
            />
          </div>

          {/* Password Field */}
          <div className="register-form-group">
            <label className="register-form-label">
              <Lock className="register-form-icon" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              className="register-form-input"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="register-form-group">
            <label className="register-form-label">
              <Phone className="register-form-icon" />
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your number"
              className="register-form-input"
              required
            />
          </div>

          {/* Date of Birth Field */}
          <div className="register-form-group">
            <label className="register-form-label">
              Date of Birth
            </label>
            <div className="register-date-container">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="register-date-input"
                required
              />
              <Calendar className="register-date-icon" size={20} />
            </div>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="login-link-container">
          <button
            onClick={onLoginClick}
            className="login-link"
          >
            Already have an account? Login here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
