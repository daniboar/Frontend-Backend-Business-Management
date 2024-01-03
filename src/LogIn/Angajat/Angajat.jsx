import React from 'react';
import './Angajat.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const Angajat = ({ onLogoutClick, onVizualizareDatePersonale, onVizualizareProiect, onProcentajProiect, onCerereMarire }) => {
  return (
    <div className="angajat-page">
      <div className="container">
        <FormHeader title="Bun venit, angajatule!" />
        <FormTitle title="Exploreaza munca si oportunitatile" />
        <div className="button-container">
          <button onClick={onCerereMarire}>Cerere marire</button>
          <button onClick={onProcentajProiect}>Procentaj proiect</button>
          <button onClick={onVizualizareProiect}>Vizualizare proiect</button>
          <button onClick={onVizualizareDatePersonale}>Vizualizare date personale</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Angajat;
