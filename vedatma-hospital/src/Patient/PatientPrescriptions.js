import React, { useState } from 'react';
import './PatientPrescriptions.css';
import { 
  Calendar, 
  User, 
  Search,
  Filter,
  Download,
  Pill,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

const PatientPrescriptions = ({ prescriptions = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Status');

  // Simple prescription data matching your design exactly
  const defaultPrescriptions = [
    {
      id: 1,
      date: "1/15/2024",
      doctorName: "Dr. Mahesh Patil",
      status: "Active",
      medications: [
        {
          name: "Amoxicillin",
          dosage: "500mg - Twice daily",
          duration: "7 days",
          type: "ANTIBIOTIC"
        },
        {
          name: "Paracetamol",
          dosage: "650mg - As needed",
          duration: "5 days",
          type: "PAIN RELIEF"
        }
      ],
      notes: "Complete the full course of antibiotics",
      refillsLeft: 2
    },
    {
      id: 2,
      date: "12/20/2023",
      doctorName: "Dr. Manasi Patil",
      status: "Completed",
      medications: [
        {
          name: "Ibuprofen",
          dosage: "400mg - Three times daily",
          duration: "10 days",
          type: "ANTI-INFLAMMATORY"
        }
      ],
      notes: "Take with food to avoid stomach irritation",
      refillsLeft: 0
    }
  ];

  const displayPrescriptions = prescriptions.length > 0 ? prescriptions : defaultPrescriptions;

  return (
    <div className="prescriptions-page">
      {/* Header Section */}
      <div className="prescriptions-page-header">
        <h2>My Prescriptions</h2>
        <div className="header-stats">
          <div className="stat-box">
            <Pill size={16} />
            <span className="stat-number">1</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-box">
            <RefreshCw size={16} />
            <span className="stat-number">3</span>
            <span className="stat-label">Refills</span>
          </div>
        </div>
      </div>

      {/* Controls Row */}
      <div className="controls-row">
        <div className="search-container">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search medications or doctors..."
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
              <option>Active</option>
              <option>Completed</option>
              <option>Expired</option>
            </select>
          </div>
          <button className="export-button">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Prescription Cards */}
      <div className="prescriptions-container">
        {displayPrescriptions.map((prescription) => (
          <div key={prescription.id} className="prescription-card-simple">
            {/* Card Header */}
            <div className="card-header">
              <div className="header-left">
                <h3>Prescription</h3>
                <div className="doctor-info">
                  <User size={14} />
                  <span>By {prescription.doctorName}</span>
                </div>
                {prescription.refillsLeft > 0 && (
                  <div className="refills-info">
                    <RefreshCw size={14} />
                    <span>{prescription.refillsLeft} refills left</span>
                  </div>
                )}
              </div>
              <div className="header-right">
                <span className={`status-badge-simple ${prescription.status.toLowerCase()}`}>
                  {prescription.status}
                </span>
                <div className="date-info">
                  <Calendar size={16} />
                  <span>{prescription.date}</span>
                </div>
              </div>
            </div>

            {/* Medications */}
            <div className="medications-list">
              {prescription.medications.map((medication, index) => (
                <div key={index} className="medication-row">
                  <div className="medication-main">
                    <div className="med-name-type">
                      <h4>{medication.name}</h4>
                      <span className="med-type">{medication.type}</span>
                    </div>
                    <p className="med-dosage">{medication.dosage}</p>
                    <p className="med-duration">Duration: {medication.duration}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Notes */}
            {prescription.notes && (
              <div className="notes-section">
                <div className="notes-header">
                  <AlertCircle size={16} />
                  <span>Notes:</span>
                </div>
                <p>{prescription.notes}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="card-actions">
              <button className="btn-secondary">
                <Download size={14} />
                Download PDF
              </button>
              {prescription.status === 'Active' && prescription.refillsLeft > 0 && (
                <button className="btn-primary">
                  <RefreshCw size={14} />
                  Request Refill
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientPrescriptions;
