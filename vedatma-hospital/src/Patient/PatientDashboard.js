import React, { useState } from 'react';
import { 
  Calendar, 
  FileText, 
  Activity, 
  History, 
  LogOut,
  User,
  Pill
} from 'lucide-react';
import './PatientDashboard.css';
import PatientOverview from './PatientOverview';
import PatientAppointments from './PatientAppointments';
import PatientPrescriptions from './PatientPrescriptions';
import PatientMedicalHistory from './PatientMedicalHistory';
import PatientSidebar from './PatientSidebar';

const PatientDashboard = ({ onLogout, patientName = "Manish Patil" }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Centralized data management
  const dashboardData = {
    stats: {
      upcomingAppointments: 2,
      activePrescriptions: 1,
      totalVisits: 3
    },
    lastVisit: {
      doctor: "Dr. Mahesh Patil",
      date: "13/08/2025",
      diagnosis: "Fever",
      nextVisit: "17/08/2025"
    },
    appointments: [
      {
        id: 1,
        doctor: "Dr. Mahesh Patil",
        type: "Regular checkup",
        date: "13/08/2025",
        time: "10:00am",
        status: "Confirmed"
      },
      {
        id: 2,
        doctor: "Dr. Manasi Patil",
        type: "Consultation",
        date: "14/08/2025",
        time: "4:30pm",
        status: "Pending"
      }
    ],
    recentActivity: [
      {
        id: 1,
        type: "visit",
        doctor: "Dr. Mahesh Patil",
        condition: "throat infection",
        date: "1/10/2025"
      }
    ],
    prescriptions: [],
    medicalHistory: []
  };

  const handleBookAppointment = () => {
    alert("Book Appointment functionality to be implemented");
  };

  const tabs = [
    { id: 'Overview', label: 'Overview', icon: Activity },
    { id: 'Appointments', label: 'Appointments', icon: Calendar },
    { id: 'Prescriptions', label: 'Prescriptions', icon: Pill },
    { id: 'Medical History', label: 'Medical History', icon: History }
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'Overview':
        return (
          <PatientOverview 
            patientName={patientName}
            dashboardData={dashboardData}
            onBookAppointment={handleBookAppointment}
          />
        );
      case 'Appointments':
        return (
          <PatientAppointments 
            appointments={dashboardData.appointments}
            onBookAppointment={handleBookAppointment}
          />
        );
      case 'Prescriptions':
        return (
          <PatientPrescriptions 
            prescriptions={dashboardData.prescriptions}
          />
        );
      case 'Medical History':
        return (
          <PatientMedicalHistory 
            medicalHistory={dashboardData.medicalHistory}
          />
        );
      default:
        return (
          <PatientOverview 
            patientName={patientName}
            dashboardData={dashboardData}
            onBookAppointment={handleBookAppointment}
          />
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="portal-title">
            <User className="portal-icon" />
            <div>
              <h1>Patient Portal</h1>
              <p>Welcome back, {patientName}</p>
            </div>
          </div>
        </div>
        <button className="logout-button" onClick={onLogout}>
          <LogOut size={16} />
          Logout
        </button>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <IconComponent size={16} />
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="main-content">
          {renderContent()}
        </div>

        {/* Sidebar - Only show for Overview */}
        {activeTab === 'Overview' && (
          <PatientSidebar 
            lastVisit={dashboardData.lastVisit}
            onBookAppointment={handleBookAppointment}
          />
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
