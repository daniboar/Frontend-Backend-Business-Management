import React, { useState, useEffect } from 'react';
import './VizualizareEchipa.css';

const VizualizareEchipa = ({ onBackClick }) => {
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [echipa, setEchipa] = useState([]);
  const [showText, setShowText] = useState(false);

  const handleShowButtonClick = async () => {
    if (!teamLeaderId) {
      alert('Please enter your ID before showing the team.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/team-leaders/echipa/${teamLeaderId}`);
      const data = await response.json();

      if (response.ok) {
        setEchipa(data);
        setShowText(true);
      } else if (response.status === 404) {
        alert('Team Leader or team not found.');
      } else {
        alert('Error retrieving team data.');
      }
    } catch (error) {
      console.error('Error during request:', error);
      alert('Error retrieving team data.');
    }
  };

  useEffect(() => {
    // Reset state when the component is mounted or teamLeaderId changes
    setShowText(false);
    setEchipa([]);
  }, [teamLeaderId]);

  return (
    <div>
      <h2 className="echipa-title">This is your team</h2>

      <label htmlFor="teamLeaderIdInput" className="your-id-label">
        Your ID:
      </label>
      <input
        type="text"
        id="teamLeaderIdInput"
        className="your-id-input"
        value={teamLeaderId}
        onChange={(e) => setTeamLeaderId(e.target.value)}
      />

      <button onClick={handleShowButtonClick}>SHOW</button>

      {showText && (
        <div className="container text">
          {echipa.map((angajat) => (
            <div key={angajat.id}>
              ID: {angajat.id}, Nume: {angajat.nume}, Prenume: {angajat.prenume}, Procentaj : {angajat.procentajProiect}
            </div>
          ))}
        </div>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default VizualizareEchipa;
