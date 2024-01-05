import React from 'react';
import './Stergeri.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Stergeri = ({ onBackClick, onStergereAngajat, onStergereTeamLeader, onStergereEchipa, onStergereTeamLeaderEchipa }) => {
  return (
    <div className="stergeri-page">
      <div className="container-stergeri">
        <FormHeader title="Stergeri posibile"/>
        <div className="button-container-stergeri">
          <button onClick={onStergereAngajat}>Stergere Angajat</button>
          <button onClick={onStergereTeamLeader}>Stergere TeamLeader</button>
          <button onClick={onStergereEchipa}>Stergere Echipa</button>
          <button onClick={onStergereTeamLeaderEchipa}>Stergere TeamLeader Echipa</button>
          <button onClick={onBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Stergeri;
