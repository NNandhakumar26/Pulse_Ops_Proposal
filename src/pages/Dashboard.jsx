import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="dashboard">
      {/* Logout Button */}
      <button onClick={handleLogout} className="logout-btn">
        <i className="fas fa-sign-out-alt"></i> Logout
      </button>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <video autoPlay loop muted playsInline>
              <source src="/assets/pulse-ops-logo-animated.mp4" type="video/mp4" />
              <img src="/assets/pulse-ops-logo.png" alt="Pulse Ops Logo" />
            </video>
          </div>

          <h1 className="hero-title">PULSE OPS</h1>
          <p className="hero-subtitle">Workforce Management System</p>
          <p className="hero-description">
            A comprehensive, modern solution for managing employee attendance, scheduling, leave requests,
            reimbursements, and client billing. Built with cutting-edge technology for seamless operations
            across web and mobile platforms.
          </p>

          <div className="cta-buttons">
            <button onClick={() => scrollToSection('prototypes')} className="cta-btn cta-btn-primary">
              <i className="fas fa-desktop"></i> Explore Prototypes
            </button>
            <Link to="/complete-report" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">
              <i className="fas fa-file-alt"></i> View Documentation
            </Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Prototypes Section */}
      <section className="prototypes-section" id="prototypes">
        <div className="section-header">
          <h2 className="section-title">Interactive Prototypes</h2>
          <p className="section-description">
            Explore fully functional prototypes showcasing the look and feel of all Pulse Ops applications
          </p>
        </div>

        <div className="prototypes-grid">
          {/* Admin Dashboard */}
          <div className="prototype-card">
            <div className="prototype-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="prototype-content">
              <h3 className="prototype-title">Admin Dashboard</h3>
              <p className="prototype-description">
                Comprehensive management interface for HR, administrators, and managers to control all system operations.
              </p>
              <ul className="prototype-features">
                <li>Real-time attendance monitoring</li>
                <li>User & schedule management</li>
                <li>Leave & reimbursement approvals</li>
                <li>Client billing & payroll</li>
                <li>Advanced reports & analytics</li>
              </ul>
              <Link to="/admin-dashboard" target="_blank" rel="noopener noreferrer" className="prototype-link">
                <i className="fas fa-external-link-alt"></i> Launch Dashboard
              </Link>
            </div>
          </div>

          {/* Employee Portal */}
          <div className="prototype-card">
            <div className="prototype-icon" style={{ background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' }}>
              <i className="fas fa-user-clock"></i>
            </div>
            <div className="prototype-content">
              <h3 className="prototype-title">Employee Portal</h3>
              <p className="prototype-description">
                Self-service portal for employees to manage attendance, view schedules, request leaves, and submit expenses.
              </p>
              <ul className="prototype-features">
                <li>Clock in/out functionality</li>
                <li>Schedule viewing & confirmation</li>
                <li>Leave request management</li>
                <li>Expense reimbursement claims</li>
                <li>Personal performance tracking</li>
              </ul>
              <Link to="/employee-portal" target="_blank" rel="noopener noreferrer" className="prototype-link">
                <i className="fas fa-external-link-alt"></i> Launch Portal
              </Link>
            </div>
          </div>

          {/* Mobile App */}
          <div className="prototype-card">
            <div className="prototype-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="prototype-content">
              <h3 className="prototype-title">Mobile App Preview</h3>
              <p className="prototype-description">
                Flutter-based mobile application for iOS and Android with native performance and beautiful UI.
              </p>
              <ul className="prototype-features">
                <li>Native iOS & Android experience</li>
                <li>GPS-based attendance tracking</li>
                <li>Push notifications for schedules</li>
                <li>Offline-capable features</li>
                <li>Optimized for mobile devices</li>
              </ul>
              <Link to="/mobile-app" target="_blank" rel="noopener noreferrer" className="prototype-link">
                <i className="fas fa-external-link-alt"></i> View Mobile Screens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Key Features</h2>
          <p className="section-description">
            Powerful capabilities designed for modern workforce management
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h4 className="feature-title">Real-Time Tracking</h4>
            <p className="feature-description">
              Live attendance monitoring with clock-in/out, break management, and GPS verification
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h4 className="feature-title">Smart Scheduling</h4>
            <p className="feature-description">
              Drag-and-drop scheduling with conflict detection and automated notifications
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="feature-title">Secure & Compliant</h4>
            <p className="feature-description">
              Role-based access control, IP whitelisting, and comprehensive audit logs
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h4 className="feature-title">Advanced Analytics</h4>
            <p className="feature-description">
              Detailed reports, performance metrics, and custom report builder
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-mobile"></i>
            </div>
            <h4 className="feature-title">Mobile-First</h4>
            <p className="feature-description">
              Native mobile apps with offline capabilities and push notifications
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h4 className="feature-title">Billing Integration</h4>
            <p className="feature-description">
              Automated client billing, timesheet verification, and payroll processing
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Pulse Ops. All rights reserved. | Workforce Management System</p>
      </footer>
    </div>
  );
};

export default Dashboard;
