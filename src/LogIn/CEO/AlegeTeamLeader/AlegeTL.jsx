import React, { useState } from 'react';
import './AlegeTL.css';

const AlegeTL = ({ onBackClick }) => {
  const [ceoId, setCeoId] = useState('');
  const [echipaId, setEchipaId] = useState('');
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleAtribuieButtonClick = async () => {
    if (!ceoId || !echipaId || !teamLeaderId) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/ceos/adauga_teamleader/${ceoId}/${echipaId}/${teamLeaderId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmissionSuccessful(true);
      } else if (response.status === 404) {
        alert('Ceo, team, or team leader not found.');
      } else {
        alert('Error adding team leader to the team.');
      }
    } catch (error) {
      console.error('Error during request:', error);
      alert('Error adding team leader to the team.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Assign a TeamLeader to a Team</h1>

      <label className="inputLabel">
        CEO ID:
        <input
          type="text"
          className="textInput"
          value={ceoId}
          onChange={(e) => setCeoId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Team ID:
        <input
          type="text"
          className="textInput"
          value={echipaId}
          onChange={(e) => setEchipaId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        TeamLeader ID:
        <input
          type="text"
          className="textInput"
          value={teamLeaderId}
          onChange={(e) => setTeamLeaderId(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleAtribuieButtonClick}>
        Assign
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          TeamLeader assignment was successful.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default AlegeTL;
