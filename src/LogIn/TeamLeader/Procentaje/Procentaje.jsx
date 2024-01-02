import React from 'react';
import './Procentaje.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Procentaje = ({ onBackClick }) => {
  return (
    <div className="gestiuneEchipa-page">
      <div className="container-echipa">
        <FormHeader title="Gestiunea echipei"/>
        <div className="button-container-echipa">
          <button>Modificare Procentaj Propriu</button>
          <button>Modificare Procentaj Total</button>
          <button onClick={onBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Procentaje;
