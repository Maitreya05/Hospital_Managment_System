import React from 'react';
import { Plus, Calendar, Clock } from 'lucide-react';

const PatientAppointments = ({ 
  appointments = [], 
  onBookAppointment 
}) => {
  // Default appointments if none provided
  const defaultAppointments = [
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
  ];

  const displayAppointments = appointments.length > 0 ? appointments : defaultAppointments;

  return (
    <div className="appointments-section">
      {/* Header with Book Button */}
      <div className="appointments-header">
        <h2>My Appointments</h2>
        <button className="book-appointment-btn" onClick={onBookAppointment}>
          <Plus size={16} />
          Book New Appointment
        </button>
      </div>

      {/* Appointments Grid */}
      <div className="appointments-grid">
        {displayAppointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-header">
              <h3>{appointment.doctor}</h3>
              <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </span>
            </div>
            <div className="appointment-body">
              <p className="appointment-type">{appointment.type}</p>
              <div className="appointment-details">
                <div className="detail-item">
                  <Calendar size={16} />
                  <span>{appointment.date}</span>
                </div>
                <div className="detail-item">
                  <Clock size={16} />
                  <span>{appointment.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientAppointments;
