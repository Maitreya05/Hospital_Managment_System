import React from 'react';
import { Plus } from 'lucide-react';

const PatientSidebar = ({ 
  lastVisit = {}, 
  onBookAppointment 
}) => {
  // Default last visit data
  const defaultLastVisit = {
    doctor: "Dr. Mahesh Patil",
    date: "13/08/2025",
    diagnosis: "Fever",
    nextVisit: "17/08/2025"
  };

  const visitData = Object.keys(lastVisit).length > 0 ? lastVisit : defaultLastVisit;

  return (
    <div className="sidebar">
      {/* Last Visit Card */}
      <div className="info-card">
        <h3>Last Visit:</h3>
        <div className="visit-info">
          <div className="info-row">
            <span className="label">Doctor</span>
            <span className="value">{visitData.doctor}</span>
          </div>
          <div className="info-row">
            <span className="label">Date</span>
            <span className="value">{visitData.date}</span>
          </div>
          <div className="info-row">
            <span className="label">Diagnosis</span>
            <span className="value">{visitData.diagnosis}</span>
          </div>
          <div className="info-row">
            <span className="label">Next Visit</span>
            <span className="value">{visitData.nextVisit}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button className="action-button" onClick={onBookAppointment}>
          <Plus size={16} />
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default PatientSidebar;
