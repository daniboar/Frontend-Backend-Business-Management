import React from 'react';
import './Creari.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Creari = ({ onBackClick, onCreareAngajat, onCreareEchipa}) => {
  return (
    <div className="creari-page">
      <div className="container-creari">
        <FormHeader title="Creeaza diferite lucruri in cadrul firmei"/>
        <div className="button-container-creari">
          <button onClick={onCreareAngajat}>Adauga Angajat Nou</button>
          <button onClick={onCreareEchipa}>Creeaza o Echipa</button>
          <button onClick={onBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Creari;
