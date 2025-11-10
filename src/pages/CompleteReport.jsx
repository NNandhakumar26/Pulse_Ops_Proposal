import { useEffect } from 'react';
import './CompleteReport.css';

const CompleteReport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="complete-report-wrapper">
      <iframe
        src="/complete-report.html"
        className="complete-report-iframe"
        title="Complete Report"
      />
    </div>
  );
};

export default CompleteReport;
