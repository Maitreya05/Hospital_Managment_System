
import React, { useState } from 'react';
import { Calendar, Clock, History, Pill, Users, FileText, Activity, Shield } from 'lucide-react';
import './App.css';
import hospitalLogo from './images/vedatma-logo.png';
import PatientLogin from './Patient/PatientLogin';
import PatientRegister from './Patient/PatientRegister';
import PatientDashboard from './Patient/PatientDashboard';
import DoctorLogin from './Doctor/DoctorLogin';
import DoctorDashboard from './Doctor/DoctorDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);

  const handlePatientLogin = () => {
    setCurrentPage('patient-login');
  };

  const handleDoctorLogin = () => {
    setCurrentPage('doctor-login');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setLoggedInUser(null);
    setLoggedInDoctor(null);
  };

  const handleRegister = () => {
    setCurrentPage('patient-register');
  };

  const handleBackToLogin = () => {
    setCurrentPage('patient-login');
  };

  const handleLoginSuccess = (userData) => {
    setLoggedInUser(userData);
    setCurrentPage('patient-dashboard');
  };

  const handleDoctorLoginSuccess = (doctorData) => {
    setLoggedInDoctor(doctorData);
    setCurrentPage('doctor-dashboard');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setLoggedInDoctor(null);
    setCurrentPage('home');
  };

  // Render Patient Login Page
  if (currentPage === 'patient-login') {
    return (
      <PatientLogin 
        onBack={handleBackToHome}
        onRegister={handleRegister}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  // Render Patient Registration Page
  if (currentPage === 'patient-register') {
    return (
      <PatientRegister 
        onBack={handleBackToLogin}
        onLoginClick={handleBackToLogin}
      />
    );
  }

  // Render Patient Dashboard
  if (currentPage === 'patient-dashboard') {
    return (
      <PatientDashboard 
        onLogout={handleLogout}
        patientName={loggedInUser?.name || "Manish Patil"}
      />
    );
  }

  // Render Doctor Login Page
  if (currentPage === 'doctor-login') {
    return (
      <DoctorLogin 
        onBack={handleBackToHome}
        onLoginSuccess={handleDoctorLoginSuccess}
      />
    );
  }

  // Render Doctor Dashboard
  if (currentPage === 'doctor-dashboard') {
    return (
      <DoctorDashboard 
        onLogout={handleLogout}
        doctorName={loggedInDoctor?.name || "Dr. Mahesh Patil"}
      />
    );
  }

  // Render Home Page (your existing landing page code)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="logo-wrapper">
              <img 
                src={hospitalLogo} 
                alt="Vedatma Hospital Logo" 
                className="hospital-logo"
                width="200px"
              />
            </div>
          </div>
          
          <h1 className="hospital-title">
            WELCOME TO VEDATMA HOSPITAL
          </h1>
          <p className="subtitle">
            Please select your login type to continue
          </p>
        </div>

        {/* Portal Cards */}
        <div className="portals-container">
          {/* Patient Portal */}
          <div className="portal-card">
            <div className="text-center mb-6">
              <div className="portal-icon-container">
                <div className="patient-icon">
                  <div className="icon-face"></div>
                  <div className="icon-plus"></div>
                </div>
              </div>
              <h2 className="portal-title" style={{ textAlign: 'center' }}>Patient Portal</h2>

              <p className="portal-description">
                Access your medical records, view prescriptions,<br />
                book appointments,<br />
                and manage your healthcare journey
              </p>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <Calendar className="feature-icon blue" />
                <span>Book appointments</span>
              </div>
              <div className="feature-item">
                <Calendar className="feature-icon blue" />
                <span>Next visit reminders</span>
              </div>
              <div className="feature-item">
                <History className="feature-icon blue" />
                <span>View visit history</span>
              </div>
              <div className="feature-item">
                <Shield className="feature-icon blue" />
                <span>Check prescribed medicines</span>
              </div>
            </div>

            <button 
              onClick={handlePatientLogin}
              className="portal-button patient-button"
            >
              Continue as Patient
            </button>
          </div>

          {/* Doctor Portal */}
          <div className="portal-card">
            <div className="text-center mb-6">
              <div className="portal-icon-container">
                <div className="doctor-icon">
                  <div className="icon-face"></div>
                  <div className="doctor-hat"></div>
                  <div className="doctor-tie"></div>
                </div>
              </div>
              <h2 className="portal-title" style={{ textAlign: 'center' }}>Doctor Portal</h2>
              <p className="portal-description">
                Manage patient records, prescribe medicines,<br />
                view patient history, and<br />
                provide comprehensive care
              </p>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <Users className="feature-icon green" />
                <span>Patient management</span>
              </div>
              <div className="feature-item">
                <FileText className="feature-icon green" />
                <span>Medical history access</span>
              </div>
              <div className="feature-item">
                <Activity className="feature-icon green" />
                <span>Treatment tracking</span>
              </div>
              <div className="feature-item">
                <Shield className="feature-icon green" />
                <span>Online prescriptions</span>
              </div>
            </div>

            <button 
              onClick={handleDoctorLogin}
              className="portal-button doctor-button"
            >
              Continue as Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
