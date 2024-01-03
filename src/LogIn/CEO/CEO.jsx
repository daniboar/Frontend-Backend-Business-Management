// Numele fișierului: CEO.jsx

import React from 'react';
import './CEO.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const CEO = ({ onLogoutClick, onVizualizareClienti,onManageriazaProiectele, onVizualizareTeamLeader, onVizualizareAngajat, onAsignareTeamLeader, onModificareSalariu, onPromovari, onVizualizareCerereProiect }) => {
  return (
    <div className="ceo-page">
      <div className="container">
        <FormHeader title="Bun venit, CEO!" />
        <FormTitle title="Gestioneaza proiectele si echipele" />
        <div className="button-container-ceo">
        <button>Verificare Proiecte</button>
          <button onClick={onVizualizareCerereProiect}>Vizualizare cereri de proiecte</button>
          <button onClick={onManageriazaProiectele}>Manageriaza proiectele</button>
          <button onClick={onPromovari}>Promovari</button>
          <button onClick={onModificareSalariu}>Modificare salariu</button>
          <button onClick={onAsignareTeamLeader}>Asignare TeamLeader</button>
          <button onClick={onVizualizareAngajat}>Vizualizare Angajati</button>
          <button onClick={onVizualizareTeamLeader}>Vizualizare TeamLeaderi</button>
          <button onClick={onVizualizareClienti}>Vizualizare Clienti</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default CEO;