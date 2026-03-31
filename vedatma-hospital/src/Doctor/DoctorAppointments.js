import React, { useState } from 'react';
import './DoctorAppointments.css';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone,
  Search,
  Filter,
  Plus,
  Stethoscope
} from 'lucide-react';

const DoctorAppointments = ({ appointments = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Status');

  const defaultAppointments = [
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
  ];

  const displayAppointments = appointments.length > 0 ? appointments : defaultAppointments;

  const handlePrescribeMedicine = (appointmentId) => {
    console.log(`Prescribe medicine for appointment ${appointmentId}`);
    
  };

  return (
    <div className="doctor-appointments-page">
      
      <div className="appointments-page-header">
        <h2>My Appointments</h2>
        <div className="header-stats">
          <div className="stat-box">
            <Calendar size={16} />
            <span className="stat-number">{displayAppointments.filter(a => a.status === 'confirmed').length}</span>
            <span className="stat-label">Today</span>
          </div>
          <div className="stat-box">
            <Clock size={16} />
            <span className="stat-number">{displayAppointments.filter(a => a.status === 'pending').length}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>
      </div>

    
      <div className="controls-row">
        <div className="search-container">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="controls-right">
          <div className="filter-container">
            <Filter size={16} />
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <button className="add-appointment-btn">
            <Plus size={16} />
            Add Appointment
          </button>
        </div>
      </div>

      {/* Appointments List */}
      <div className="doctor-appointments-container">
        {displayAppointments.map((appointment) => (
          <div key={appointment.id} className="doctor-appointment-card">
            {/* Card Header */}
            <div className="appointment-card-header">
              <div className="patient-info">
                <h3>{appointment.patientName}</h3>
                <p className="appointment-type">{appointment.appointmentType}</p>
                <div className="patient-contact">
                  <Phone size={14} />
                  <span>{appointment.phone}</span>
                </div>
              </div>
              <div className="appointment-status">
                <span className={`status-badge-doctor ${appointment.status}`}>
                  {appointment.status}
                </span>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="appointment-details">
              <div className="detail-row">
                <Calendar size={16} />
                <span>{appointment.date}</span>
              </div>
              <div className="detail-row">
                <Clock size={16} />
                <span>{appointment.time}</span>
              </div>
            </div>

            {/* Reason */}
            {appointment.reason && (
              <div className="appointment-reason">
                <p><strong>Reason:</strong> {appointment.reason}</p>
              </div>
            )}

            {/* Action Button */}
            <div className="appointment-actions">
              <button 
                className="prescribe-btn"
                onClick={() => handlePrescribeMedicine(appointment.id)}
              >
                <Stethoscope size={16} />
                Prescribe Medicine
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
