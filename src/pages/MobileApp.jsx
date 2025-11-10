import { useEffect } from 'react';
import './MobileApp.css';

const MobileApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prototype-wrapper">
      <iframe
        src="/mobile-app.html"
        className="prototype-iframe"
        title="Mobile App Preview"
      />
    </div>
  );
};

export default MobileApp;
