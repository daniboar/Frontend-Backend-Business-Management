import React from 'react';
import './Angajat.css';

const Angajat = ({ onLogoutClick }) => {
  return (
    <div className="angajat-page">
      <h1>Welcome, CEO!</h1>
      <div className="button-container">
        <button>Cerere Marire</button>
        <button>Procentaj Proiect</button>
        <button>Vizualizare Proiect</button>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default Angajat;
