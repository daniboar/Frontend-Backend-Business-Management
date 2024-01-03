import React from 'react';
import './GestiuneEchipa.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const GestiuneEchipa = ({ onBackClick, onVizualizareEchipa, onStergereMembru, onAdaugareMembru }) => {
  return (
    <div className="gestiuneEchipa-page">
      <div className="container-echipa">
        <FormHeader title="Gestiunea echipei"/>
        <div className="button-container-echipa">
          <button onClick={onAdaugareMembru}>Adaugare Membru</button>
          <button onClick={onStergereMembru}>Stergere Membru</button>
          <button onClick={onVizualizareEchipa}>Vizualizare Echipa</button>
          <button onClick={onBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default GestiuneEchipa;
