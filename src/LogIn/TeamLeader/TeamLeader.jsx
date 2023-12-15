import React from 'react';
import './TeamLeader.css';

const TeamLeader = ({ onLogoutClick }) => {
  return (
    <div className="teamLeader-page">
      <h1>Welcome, Client!</h1>
      <div className="button-container">
        <button>Gestiune Echipa</button>
        <button>Gestiune Proiect</button>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default TeamLeader;
