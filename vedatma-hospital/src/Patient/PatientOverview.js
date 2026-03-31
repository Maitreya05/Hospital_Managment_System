import React from 'react';
import { 
  Calendar, 
  FileText, 
  Users,
  Plus
} from 'lucide-react';

const PatientOverview = ({ 
  patientName, 
  dashboardData, 
  onBookAppointment 
}) => {
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome back, {patientName}!</h2>
        <p>Stay on top of your health with our comprehensive care platform.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon upcoming">
            <Calendar size={24} />
          </div>
          <div className="stat-info">
            <h3>{dashboardData.stats.upcomingAppointments || 0}</h3>
            <p>Upcoming Appointment</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon prescription">
            <FileText size={24} />
          </div>
          <div className="stat-info">
            <h3>{dashboardData.stats.activePrescriptions || 1}</h3>
            <p>Active prescription</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon visits">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>{dashboardData.stats.totalVisits || 3}</h3>
            <p>Total Visits</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {dashboardData.recentActivity.length > 0 ? (
            dashboardData.recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <FileText size={20} />
                </div>
                <div className="activity-details">
                  <h4>Visit with {activity.doctor}</h4>
                  <p>{activity.condition}</p>
                  <span className="activity-date">{activity.date}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="activity-item">
              <div className="activity-icon">
                <FileText size={20} />
              </div>
              <div className="activity-details">
                <h4>Visit with Dr. Mahesh Patil</h4>
                <p>throat infection</p>
                <span className="activity-date">1/10/2025</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PatientOverview;
