import React from 'react';
import './Vizualizari.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Vizualizari = ({ onBackClick, onVizualizareAngajat, onVizualizareTeamLeader, onVizualizareClienti, onVizualizareEchipe }) => {
  return (
    <div className="vizualizari-page">
      <div className="container-vizualizari">
        <FormHeader title="Vizualizari"/>
        <div className="button-container-vizualizari">
          <button onClick={onVizualizareAngajat}>Vizualizare Angajati</button>
          <button onClick={onVizualizareTeamLeader}>Vizualizare TeamLeaderi</button>
          <button onClick={onVizualizareClienti}>Vizualizare Clienti</button>
          <button onClick={onVizualizareEchipe}>Vizualizare Echipe</button>
          <button onClick={onBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Vizualizari;
