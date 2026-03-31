import React from 'react';
import './DoctorOverview.css';
import { 
  Calendar, 
  Users, 
  FileText, 
  Clock
} from 'lucide-react';

const DoctorOverview = ({ doctorName, dashboardData }) => {
  return (
    <div className="content-grid">
      {/* Left Section */}
      <div className="left-section">
        {/* Welcome Card */}
        <div className="welcome-card">
          <h2>Good morning, {doctorName} !</h2>
          <p>Ready to provide excellent care to your patients today.</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon calendar-icon">
              <Calendar size={24} />
            </div>
            <div className="stat-content">
              <h3>{dashboardData.stats.todaysAppointments}</h3>
              <p>Today's Appointment</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon patients-icon">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <h3>{dashboardData.stats.totalPatients}</h3>
              <p>Total Patient</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon prescriptions-icon">
              <FileText size={24} />
            </div>
            <div className="stat-content">
              <h3>{dashboardData.stats.prescriptionsWritten}</h3>
              <p>Prescriptions Written</p>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="schedule-card">
          <h3>Today's Schedule</h3>
          <div className="schedule-list">
            {dashboardData.todaysSchedule.map((appointment) => (
              <div key={appointment.id} className="schedule-item">
                <div className="patient-info">
                  <h4>{appointment.patientName}</h4>
                  <p>Reason - {appointment.reason}</p>
                </div>
                <div className="appointment-status">
                  <span className={`status-badge ${appointment.status}`}>
                    {appointment.status}
                  </span>
                  <span className="appointment-time">{appointment.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="prescriptions-card">
          <h3>Recent Prescriptions</h3>
          <div className="prescriptions-list">
            {dashboardData.recentPrescriptions.map((prescription) => (
              <div key={prescription.id} className="prescription-item">
                <div className="prescription-indicator"></div>
                <div className="prescription-info">
                  <h4>{prescription.patientName}</h4>
                  <p>{prescription.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorOverview;
