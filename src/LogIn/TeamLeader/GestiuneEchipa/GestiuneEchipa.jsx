import React from 'react';
import './GestiuneEchipa.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const GestiuneEchipa = ({ onBackClick }) => {
  return (
    <div className="gestiuneEchipa-page">
      <div className="container-echipa">
        <FormHeader title="Gestiunea echipei"/>
        <div className="button-container-echipa">
          <button>Adaugare Membru</button>
          <button>Stergere Membru</button>
          <button>Vizualizare Echipa</button>
          <button onClick={onBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default GestiuneEchipa;
