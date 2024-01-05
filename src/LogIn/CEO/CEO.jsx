// Numele fișierului: CEO.jsx

import React from 'react';
import './CEO.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const CEO = ({ onLogoutClick, onVizualizari,showManageriazaCereriMarire, onStergeri,onManageriazaProiectele, onAsignareTeamLeader, onModificareSalariu, onPromovari, onVizualizareCerereProiect, onCreari }) => {
  return (
    <div className="ceo-page">
      <div className="container">
        <FormHeader title="Bun venit, CEO!" />
        <FormTitle title="Gestioneaza proiectele si echipele" />
        <div className="button-container-ceo">
          <button onClick={onVizualizareCerereProiect}>Vizualizare cereri de proiecte</button>
          <button onClick={showManageriazaCereriMarire}>Vizualizeaza cererile de marire</button>
          <button onClick={onManageriazaProiectele}>Vizualizare proiecte</button>
          <button onClick={onPromovari}>Promovari</button>
          <button onClick={onModificareSalariu}>Modificare salariu</button>
          <button onClick={onAsignareTeamLeader}>Asignare TeamLeader</button>
          <button onClick={onVizualizari}>Vizualizari pe firma</button>
          <button onClick={onStergeri}>Stergeri pe firma</button>
          <button onClick={onCreari}>Creeaza Lucruri Noi</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default CEO;