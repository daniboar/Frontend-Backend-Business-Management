import React, { useState } from 'react';
import './StergereTeamLeaderEchipa.css';

const StergereTeamLeaderEchipa = ({ onBackClick }) => {
  const [CEOID, setCEOID] = useState('');
  const [echipaID,setEchipaID] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleStergereTLEchipaClick = async () => {
    if (!CEOID || !echipaID) {
      alert('Please fill in all fields before submitting.');
      return;
    }

  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Sterge TeamLeader-ul unei echipe</h1>

      <label className="inputLabel">
        CEO ID:
        <input
          type="text"
          className="textInput"
          value={CEOID}
          onChange={(e) => setCEOID(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Echipa ID:
        <input
          type="text"
          className="textInput"
          value={echipaID}
          onChange={(e) => setEchipaID(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleStergereTLEchipaClick}>
        Stergere
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Stergerea a fost realizata cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default StergereTeamLeaderEchipa;
