import { useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prototype-wrapper">
      <iframe
        src="/admin-dashboard.html"
        className="prototype-iframe"
        title="Admin Dashboard"
      />
    </div>
  );
};

export default AdminDashboard;
