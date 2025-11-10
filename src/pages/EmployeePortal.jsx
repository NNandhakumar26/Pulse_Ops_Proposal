import { useEffect } from 'react';
import './EmployeePortal.css';

const EmployeePortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prototype-wrapper">
      <iframe
        src="/employee-portal.html"
        className="prototype-iframe"
        title="Employee Portal"
      />
    </div>
  );
};

export default EmployeePortal;
