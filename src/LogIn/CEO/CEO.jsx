// Numele fișierului: CEO.jsx

import React from 'react';
import './CEO.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const CEO = ({ onLogoutClick }) => {
  return (
    <div className="ceo-page">
      <div className="container">
        <FormHeader title="Bun venit, CEO!" />
        <FormTitle title="Gestioneaza proiectele si echipele" />
        <div className="button-container-ceo">
        <button>Verificare Proiecte</button>
          <button>Vizualizare cererei de proiecte</button>
          <button>Promovari</button>
          <button>Modificare salariu</button>
          <button>Asignare TeamLeader</button>
          <button>Vizualizare Angajati</button>
          <button>Vizualizare TeamLeaderi</button>
          <button>VizualizareClienti</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default CEO;