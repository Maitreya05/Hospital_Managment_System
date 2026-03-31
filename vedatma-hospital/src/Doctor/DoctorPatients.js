import React, { useState } from 'react';
import { 
  Search, 
  User, 
  Calendar,
  FileText,
  Plus,
  Eye,
  Edit
} from 'lucide-react';
import './DoctorPatients.css';

const DoctorPatients = ({ patients = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Default patient data matching your design
  const defaultPatients = [
    {
      id: 1,
      name: "Manish Patil",
      visits: "3 visits",
      lastVisit: {
        date: "15/08/2025",
        condition: "Fever and headache"
      },
      avatar: "MP"
    },
    {
      id: 2,
      name: "Jayesh Patil", 
      visits: "2 visits",
      lastVisit: {
        date: "10/08/2025",
        condition: "Regular checkup"
      },
      avatar: "JP"
    },
    {
      id: 3,
      name: "Pranav Patil",
      visits: "1 visit",
      lastVisit: {
        date: "05/08/2025",
        condition: "Upper respiratory tract infection"
      },
      avatar: "PP"
    }
  ];

  const displayPatients = patients.length > 0 ? patients : defaultPatients;

  const handlePrescribe = (patientId) => {
    console.log(`Prescribe medicine for patient ${patientId}`);
  };

  const handleViewHistory = (patientId) => {
    console.log(`View history for patient ${patientId}`);
  };

  return (
    <div className="doctor-patients-page">
      {/* Header Section */}
      <div className="patients-header">
        <h2>My Patients</h2>
        <div className="search-container">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Patients Grid */}
      <div className="patients-grid">
        {displayPatients.map((patient) => (
          <div key={patient.id} className="patient-card">
            {/* Patient Avatar and Info */}
            <div className="patient-info">
              <div className="patient-avatar">
                <User size={24} />
              </div>
              <div className="patient-details">
                <h3>{patient.name}</h3>
                <p className="visit-count">{patient.visits}</p>
              </div>
            </div>

            {/* Last Visit Info */}
            <div className="last-visit-section">
              <h4>Last Visit</h4>
              <div className="visit-info">
                <p className="visit-date">{patient.lastVisit.date}</p>
                <p className="visit-condition">{patient.lastVisit.condition}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="patient-actions">
              <button 
                className="prescribe-btn"
                onClick={() => handlePrescribe(patient.id)}
              >
                <Plus size={16} />
                Prescribe
              </button>
              <button 
                className="history-btn"
                onClick={() => handleViewHistory(patient.id)}
              >
                <FileText size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPatients;
