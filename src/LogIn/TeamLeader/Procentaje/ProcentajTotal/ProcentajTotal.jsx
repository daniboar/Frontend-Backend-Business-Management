import React, { useState } from 'react';
import './ProcentajTotal.css';

const ProcentajTotal = ({ onBackClick }) => {
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = async () => {
    if (!teamLeaderId) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/team-leaders/actualizeaza-procentaj/${teamLeaderId}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Logica pentru tratarea datelor la submit
        console.log('Form submitted:', { teamLeaderId });

        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsSubmissionSuccessful(true);
      } else {
        alert('Error updating total project percentage. Please try again.');
      }
    } catch (error) {
      console.error('Error updating total project percentage:', error);
      alert('Error updating total project percentage. Please try again.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Actualizeaza procentajul total al proiectului</h1>

      <label className="inputLabel">
        ID TeamLeader:
        <input
          type="text"
          className="textInput"
          value={teamLeaderId}
          onChange={(e) => setTeamLeaderId(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
        Actualizare Procentaj
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Procentajul total al proiectului a fost actualizat.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default ProcentajTotal;
