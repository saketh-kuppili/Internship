// src/ComplaintsSection.tsx
import React from 'react';
import './ComplaintsSection.css';

const ComplaintsSection: React.FC = () => {
  return (
    <div className="complaints-section">
      <div className="complaints-header mb-3">
        <h5>No new complaints</h5>
      </div>
      <div className="complaints-content">
        <img src="image/cuate.png" alt="No complaints" className="w-75" />
      </div>
    </div>
  );
};

export default ComplaintsSection;
