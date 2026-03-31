import React, { useState } from 'react';
import { 
  Search, 
  Filter,
  Calendar,
  User,
  Pill,
  Clock,
  FileText,
  Eye,
  Download,
  Plus
} from 'lucide-react';
import './DoctorPrescriptions.css';

const DoctorPrescriptions = ({ prescriptions = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [filterPeriod, setFilterPeriod] = useState('All Time');

  // Doctor's prescription history data
  const defaultPrescriptions = [
    {
      id: 1,
      patientName: "Manish Patil",
      date: "18/08/2025",
      status: "Active",
      medications: [
        {
          name: "Amoxicillin",
          dosage: "500mg",
          frequency: "Twice daily",
          duration: "7 days"
        },
        {
          name: "Paracetamol",
          dosage: "650mg",
          frequency: "As needed",
          duration: "5 days"
        }
      ],
      diagnosis: "Fever and throat infection",
      notes: "Complete the full course of antibiotics. Follow up if symptoms persist.",
      totalMedicines: 2
    },
    {
      id: 2,
      patientName: "Jayesh Patil",
      date: "15/08/2025",
      status: "Completed",
      medications: [
        {
          name: "Ibuprofen",
          dosage: "400mg",
          frequency: "Three times daily",
          duration: "10 days"
        }
      ],
      diagnosis: "Back pain",
      notes: "Take with food to avoid stomach irritation.",
      totalMedicines: 1
    },
    {
      id: 3,
      patientName: "Pranav Patil",
      date: "10/08/2025",
      status: "Completed",
      medications: [
        {
          name: "Cetirizine",
          dosage: "10mg",
          frequency: "Once daily",
          duration: "14 days"
        },
        {
          name: "Montelukast",
          dosage: "10mg",
          frequency: "Once daily at bedtime",
          duration: "30 days"
        }
      ],
      diagnosis: "Allergic rhinitis",
      notes: "Avoid known allergens. Continue for full duration.",
      totalMedicines: 2
    },
    {
      id: 4,
      patientName: "Manish Patil",
      date: "05/08/2025",
      status: "Completed",
      medications: [
        {
          name: "Vitamin D3",
          dosage: "60000 IU",
          frequency: "Once weekly",
          duration: "8 weeks"
        }
      ],
      diagnosis: "Vitamin D deficiency",
      notes: "Regular follow-up for vitamin D levels after completion.",
      totalMedicines: 1
    }
  ];

  const displayPrescriptions = prescriptions.length > 0 ? prescriptions : defaultPrescriptions;

  // Filter prescriptions based on search and filters
  const filteredPrescriptions = displayPrescriptions.filter(prescription => {
    const matchesSearch = prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All Status' || prescription.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewPrescription = (prescriptionId) => {
    console.log(`View prescription ${prescriptionId}`);
  };

  const handleDownloadPrescription = (prescriptionId) => {
    console.log(`Download prescription ${prescriptionId}`);
  };

  return (
    <div className="doctor-prescriptions-page">
      {/* Header Section */}
      <div className="prescriptions-header">
        <div className="header-left">
          <h2>My Prescriptions</h2>
          <div className="prescriptions-stats">
            <span className="stat-item">
              <Pill size={16} />
              {filteredPrescriptions.length} Total
            </span>
            <span className="stat-item">
              <Clock size={16} />
              {filteredPrescriptions.filter(p => p.status === 'Active').length} Active
            </span>
          </div>
        </div>
        <button className="new-prescription-btn">
          <Plus size={16} />
          New Prescription
        </button>
      </div>

      {/* Controls Section */}
      <div className="controls-section">
        <div className="search-container">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search by patient name or diagnosis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filters-container">
          <div className="filter-group">
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
          <div className="filter-group">
            <Calendar size={16} />
            <select 
              value={filterPeriod} 
              onChange={(e) => setFilterPeriod(e.target.value)}
            >
              <option>All Time</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prescriptions List */}
      <div className="prescriptions-list">
        {filteredPrescriptions.map((prescription) => (
          <div key={prescription.id} className="prescription-card">
            {/* Card Header */}
            <div className="prescription-header">
              <div className="prescription-info">
                <div className="patient-prescription-info">
                  <h3>{prescription.patientName}</h3>
                  <span className={`status-badge ${prescription.status.toLowerCase()}`}>
                    {prescription.status}
                  </span>
                </div>
                <div className="prescription-meta">
                  <span className="prescription-date">
                    <Calendar size={14} />
                    {prescription.date}
                  </span>
                  <span className="medicines-count">
                    <Pill size={14} />
                    {prescription.totalMedicines} medicines
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="diagnosis-section">
              <h4>Diagnosis</h4>
              <p>{prescription.diagnosis}</p>
            </div>

            {/* Medications */}
            <div className="medications-section">
              <h4>Prescribed Medications</h4>
              <div className="medications-list">
                {prescription.medications.map((medication, index) => (
                  <div key={index} className="medication-item">
                    <div className="medication-name">
                      <strong>{medication.name}</strong>
                      <span className="dosage">{medication.dosage}</span>
                    </div>
                    <div className="medication-details">
                      <span>{medication.frequency}</span>
                      <span>Duration: {medication.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {prescription.notes && (
              <div className="notes-section">
                <h4>Notes</h4>
                <p>{prescription.notes}</p>
              </div>
            )}

            {/* Actions */}
            <div className="prescription-actions">
              <button 
                className="view-btn"
                onClick={() => handleViewPrescription(prescription.id)}
              >
                <Eye size={14} />
                View Details
              </button>
              <button 
                className="download-btn"
                onClick={() => handleDownloadPrescription(prescription.id)}
              >
                <Download size={14} />
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPrescriptions.length === 0 && (
        <div className="prescriptions-empty">
          <FileText size={48} />
          <h3>No prescriptions found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default DoctorPrescriptions;
