import React from 'react';
import './SefSectie.css';

const SefSectie = ({ onLogoutClick }) => {
  return (
    <div className="sefSectie-page">
      <h1>Welcome, Client!</h1>
      <div className="button-container">
        <button>Alegere Team Leader</button>
        <button>Asignare Proiect</button>
        <button>Gestiune Proiect</button>
        <button>Verificare Mariri</button>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

export default SefSectie;
