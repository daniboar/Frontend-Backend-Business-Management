import React from 'react';
import './TeamLeader.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;


const TeamLeader = ({ onLogoutClick, onVizualizareDatePersonale, onVizualizareDetaliiProiect, onProcentajeProiect, onGestiuneEchipa }) => {
  return (
    <div className="teamLeader-page">
      <div className="container">
        <FormHeader title="Bun venit, liderule!" />
        <FormTitle title="Gestioneaza echipa si proiectul" />
        <div className="button-container-teamLeader">
          <button onClick={onGestiuneEchipa}>Gestiune Echipa</button>
          <button onClick={onProcentajeProiect}>Procentaje Proiect</button>
          <button onClick={onVizualizareDetaliiProiect}>Vizualizare Detalii Proiect</button>
          <button onClick={onVizualizareDatePersonale}>Vizualizare Date Personale</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default TeamLeader;
