import React from 'react';
import './CEO.css';

const CEO = ({ onLogoutClick }) => {
  return (
    <div className="ceo-page">
      <h1>Welcome, CEO!</h1>
      <div className="button-container">
        <button>Verificare Proiecte</button>
        <button>Promovari</button>
        <button>Modificare salariu</button>
        <button>Vizualizare cererei de proiecte</button>
        <button>Verificare CV-uri</button>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default CEO;
