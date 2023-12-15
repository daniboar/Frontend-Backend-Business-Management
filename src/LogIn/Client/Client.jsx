import React from 'react';
import './Client.css';

const Client = ({ onLogoutClick }) => {
  return (
    <div className="client-page">
      <h1>Welcome, Client!</h1>
      <div className="button-container">
        <button>Verificare Proiecte</button>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default Client;
