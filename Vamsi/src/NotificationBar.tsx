// src/NotificationBar.tsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import './NotificationBar.css';

const NotificationBar: React.FC = () => {
  return (
    <div className="notification-bar d-flex justify-content-around align-items-center">
      <Button variant="danger" className="circle-button">
        3
      </Button>
      <Button variant="warning" className="circle-button">
        5
      </Button>
      <Button variant="success" className="circle-button">
        7
      </Button>
      <i className="bi bi-bell" style={{ fontSize: '24px' }}></i>
    </div>
  );
};

export default NotificationBar;
