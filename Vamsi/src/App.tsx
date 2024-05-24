// src/App.tsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import NotificationBar from './NotificationBar';
import ComplaintsSection from './ComplaintsSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <NotificationBar />
      <div className="map-container">
        <MapContainer center={[17.3850, 78.4867]} zoom={13} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
        <ComplaintsSection />
      </div>
    </div>
  );
};

export default App;
