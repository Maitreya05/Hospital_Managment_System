import React, { useState } from 'react';
import './PatientMedicalHistory.css';
import { 
  Calendar, 
  User, 
  Search,
  Filter,
  Download,
  FileText,
  Activity,
  Thermometer,
  Heart,
  Eye,
  AlertTriangle
} from 'lucide-react';

const PatientMedicalHistory = ({ medicalHistory = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Types');

  // Simple medical history data
  const defaultMedicalHistory = [
    {
      id: 1,
      date: "15/08/2025",
      doctorName: "Dr. Mahesh Patil",
      visitType: "Regular Checkup",
      diagnosis: "Fever",
      symptoms: ["High temperature", "Headache", "Body aches"],
      treatment: "Prescribed antibiotics and rest",
      notes: "Patient responded well to treatment. Follow-up recommended in 1 week.",
      vitals: {
        temperature: "101.2°F",
        bloodPressure: "120/80 mmHg",
        heartRate: "78 bpm"
      },
      status: "Completed"
    },
    {
      id: 2,
      date: "02/07/2025",
      doctorName: "Dr. Manasi Patil",
      visitType: "Consultation",
      diagnosis: "Routine Health Check",
      symptoms: ["General wellness check"],
      treatment: "No medication required",
      notes: "All vitals normal. Recommended annual checkup.",
      vitals: {
        temperature: "98.6°F",
        bloodPressure: "118/75 mmHg",
        heartRate: "72 bpm"
      },
      status: "Completed"
    },
    // {
    //   id: 3,
    //   date: "20/05/2025",
    //   doctorName: "Dr. Rajesh Kumar",
    //   visitType: "Emergency",
    //   diagnosis: "Minor injury",
    //   symptoms: ["Knee pain", "Swelling"],
    //   treatment: "Applied bandage, prescribed pain relief",
    //   notes: "Minor sports injury. Rest for 3-4 days recommended.",
    //   vitals: {
    //     temperature: "98.4°F",
    //     bloodPressure: "125/82 mmHg",
    //     heartRate: "85 bpm"
    //   },
    //   status: "Completed"
    // }
  ];

  const displayHistory = medicalHistory.length > 0 ? medicalHistory : defaultMedicalHistory;

  const getVisitTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'regular checkup':
        return <Activity size={16} />;
      case 'consultation':
        return <User size={16} />;
      case 'emergency':
        return <AlertTriangle size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <div className="medical-history-page">
      {/* Header Section */}
      <div className="medical-history-header">
        <h2>Medical History</h2>
        <div className="header-stats">
          <div className="stat-box">
            <FileText size={16} />
            <span className="stat-number">{displayHistory.length}</span>
            <span className="stat-label">Records</span>
          </div>
          <div className="stat-box">
            <Activity size={16} />
            <span className="stat-number">{displayHistory.filter(h => h.visitType === 'Regular Checkup').length}</span>
            <span className="stat-label">Checkups</span>
          </div>
        </div>
      </div>

      {/* Controls Row */}
      <div className="controls-row">
        <div className="search-container">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search diagnosis, doctor, or symptoms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="controls-right">
          <div className="filter-container">
            <Filter size={16} />
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option>All Types</option>
              <option>Regular Checkup</option>
              <option>Consultation</option>
              
            </select>
          </div>
          <button className="export-button">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Medical History Cards */}
      <div className="medical-history-container">
        {displayHistory.map((record) => (
          <div key={record.id} className="medical-record-card">
            {/* Card Header */}
            <div className="card-header">
              <div className="header-left">
                <div className="visit-type">
                  {getVisitTypeIcon(record.visitType)}
                  <h3>{record.visitType}</h3>
                </div>
                <div className="doctor-info">
                  <User size={14} />
                  <span>By {record.doctorName}</span>
                </div>
              </div>
              <div className="header-right">
                <span className="status-badge-medical completed">
                  {record.status}
                </span>
                <div className="date-info">
                  <Calendar size={16} />
                  <span>{record.date}</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="record-content">
              {/* Diagnosis */}
              <div className="diagnosis-section">
                <h4>Diagnosis</h4>
                <p>{record.diagnosis}</p>
              </div>

              {/* Symptoms */}
              <div className="symptoms-section">
                <h4>Symptoms</h4>
                <div className="symptoms-list">
                  {record.symptoms.map((symptom, index) => (
                    <span key={index} className="symptom-tag">
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              {/* Treatment */}
              <div className="treatment-section">
                <h4>Treatment</h4>
                <p>{record.treatment}</p>
              </div>

              {/* Vitals */}
              <div className="vitals-section">
                <h4>Vitals</h4>
                <div className="vitals-grid">
                  <div className="vital-item">
                    <Thermometer size={16} />
                    <span className="vital-label">Temperature</span>
                    <span className="vital-value">{record.vitals.temperature}</span>
                  </div>
                  <div className="vital-item">
                    <Heart size={16} />
                    <span className="vital-label">Blood Pressure</span>
                    <span className="vital-value">{record.vitals.bloodPressure}</span>
                  </div>
                  <div className="vital-item">
                    <Activity size={16} />
                    <span className="vital-label">Heart Rate</span>
                    <span className="vital-value">{record.vitals.heartRate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            {record.notes && (
              <div className="notes-section">
                <div className="notes-header">
                  <FileText size={16} />
                  <span>Notes:</span>
                </div>
                <p>{record.notes}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="card-actions">
              <button className="btn-secondary">
                <Download size={14} />
                Download Report
              </button>
              <button className="btn-secondary">
                <Eye size={14} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientMedicalHistory;
