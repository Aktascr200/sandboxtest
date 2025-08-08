import React from 'react';

const DashboardContent = () => {
  const frameworks = [
    { name: 'ISO 27001', status: 'Not Ready', color: '#1f2937', abbr: 'ISO' },
    { name: 'GDPR', status: 'Not Ready', color: '#3b82f6', abbr: 'GDPR' },
    { name: 'HIPAA', status: 'Not Ready', color: '#1f2937', abbr: 'HIPAA' },
    { name: 'ISO 27001', status: 'Not Ready', color: '#1f2937', abbr: 'ISO' },
    { name: 'SOC2', status: 'Not Ready', color: '#1f2937', abbr: 'SOC2' },
    { name: 'PCI DSS', status: 'Not Ready', color: '#3b82f6', abbr: 'PCI DSS' }
  ];

  return (
    <div className="content-area">
      {/* Notification Banner */}
      <div className="notification-banner">
        <div className="notification-icon">🎯</div>
        <div className="notification-text">
          Need help with any GRC workflow? Ask Scrut Teammates.
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Current Compliance */}
        <div className="compliance-card">
          <div className="card-header">
            <div className="card-title">
              Current Compliance
              <span className="info-icon">ℹ️</span>
            </div>
            <a href="#" className="view-link">View Compliance Trend</a>
          </div>
          <div className="compliance-percentage">0%</div>
          <div className="compliance-label">Compliant</div>
        </div>

        {/* Jobs that need attention */}
        <div className="jobs-card">
          <div className="card-header">
            <div className="card-title">Jobs that need your attention</div>
          </div>
          <div className="jobs-stats">
            <div className="job-stat">
              Policies <span className="job-stat-badge">8</span>
            </div>
            <div className="job-stat">
              Evidences <span className="job-stat-badge">0</span>
            </div>
            <div className="job-stat">
              Tests <span className="job-stat-badge">0</span>
            </div>
          </div>
          <div className="empty-state">
            <div className="empty-icon">📦</div>
            <div className="empty-text">All good here.</div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="metrics-row">
        <div className="metric-card">
          <div className="metric-icon">📄</div>
          <div className="metric-value">0%</div>
          <div className="metric-label">Policy</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">📁</div>
          <div className="metric-value">0%</div>
          <div className="metric-label">Evidence Tasks</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">📊</div>
          <div className="metric-value">0%</div>
          <div className="metric-label">Tests</div>
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="frameworks-section">
        <div className="section-header">
          <h2 className="section-title">Frameworks</h2>
          <a href="#" className="view-link">View All</a>
        </div>
        <div className="frameworks-grid">
          {frameworks.map((framework, index) => (
            <div key={index} className="framework-item">
              <div 
                className="framework-badge" 
                style={{ backgroundColor: framework.color }}
              >
                {framework.abbr}
              </div>
              <div className="framework-info">
                <div className="framework-name">{framework.name}</div>
                <div className="framework-status">{framework.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Audits */}
      <div className="audits-section">
        <div className="section-header">
          <h2 className="section-title">Upcoming Audits</h2>
        </div>
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <div className="empty-text">
            No upcoming audits, please make sure<br />
            there are audit dates assigned to frameworks<br />
            so that the calendar gets populated
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
