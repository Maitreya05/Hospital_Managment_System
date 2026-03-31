import React, { useState } from 'react';
import DoctorAppointments from './DoctorAppointments';
import DoctorOverview from './DoctorOverview';
import DoctorPatients from './DoctorPatients';
import DoctorPrescriptions from './DoctorPrescriptions';
import { 
  Calendar, 
  Users, 
  FileText, 
  Activity,
  LogOut,
  Clock,
  User
} from 'lucide-react';
import './DoctorDashboard.css';

const DoctorDashboard = ({ onLogout, doctorName = "Dr. Mahesh Patil" }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Centralized data management
  const dashboardData = {
    stats: {
      todaysAppointments: 3,
      totalPatients: 10,
      prescriptionsWritten: 7
    },
    todaysSchedule: [
      {
        id: 1,
        patientName: "Jayesh Patil",
        reason: "Fever",
        time: "2:30pm",
        status: "pending"
      }
    ],
    recentPrescriptions: [
      {
        id: 1,
        patientName: "Manish Patil",
        date: "18/08/2025"
      }
    ],
    appointments: [
      {
        id: 1,
        patientName: "Manish Patil",
        appointmentType: "Regular checkup",
        date: "2/15/2024",
        time: "10:00 AM",
        status: "confirmed",
        phone: "+91 98765 43210",
        reason: "Routine medical examination"
      },
      {
        id: 2,
        patientName: "Jayesh Patil",
        appointmentType: "Consultation",
        date: "2/15/2024",
        time: "11:30 AM",
        status: "confirmed",
        phone: "+91 98765 43211",
        reason: "Follow-up visit for diabetes"
      },
      {
        id: 3,
        patientName: "Hemant Pawar",
        appointmentType: "Emergency visit",
        date: "2/15/2024",
        time: "2:00 PM",
        status: "pending",
        phone: "+91 98765 43212",
        reason: "Severe headache and dizziness"
      }
    ],
    patients: [],
    prescriptions: []
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText }
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <DoctorOverview 
            doctorName={doctorName}
            dashboardData={dashboardData}
          />
        );
      case 'appointments':
        return (
          <DoctorAppointments 
            appointments={dashboardData.appointments}
          />
        );
      case 'patients':
        return (
          <DoctorPatients 
            patients={dashboardData.patients}
          />
        );
      case 'prescriptions':
        return (
          <DoctorPrescriptions 
            prescriptions={dashboardData.prescriptions}
          />
        );
      default:
        return (
          <DoctorOverview 
            doctorName={doctorName}
            dashboardData={dashboardData}
          />
        );
    }
  };

  return (
    <div className="doctor-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="doctor-icon-header">
            <div className="stethoscope-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M11 2a2 2 0 0 0-2 2v6.5a8.5 8.5 0 1 0 6 0V4a2 2 0 0 0-2-2" stroke="white" strokeWidth="2" fill="white"/>
                <circle cx="17" cy="12" r="2" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          <div className="welcome-text">
            <h1>Welcome Doctor</h1>
            <p>{doctorName}</p>
          </div>
        </div>
        
        <button onClick={onLogout} className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
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
      </div>

      {/* Main Content - Render different components based on active tab */}
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default DoctorDashboard;
