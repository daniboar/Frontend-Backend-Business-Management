import React, { useState } from 'react';
import './ProcentajPropriu.css';

const ProcentajPropriu = ({ onBackClick }) => {
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [proiectId, setProiectId] = useState('');
  const [procentaj, setProcentaj] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = async () => {
    if (!teamLeaderId || !proiectId || !procentaj) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/proiect/procentaj/${teamLeaderId}/${proiectId}/${procentaj}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsSubmissionSuccessful(true);
      } else {
        alert('Error updating percentage. Please try again.');
      }
    } catch (error) {
      console.error('Error updating percentage:', error);
      alert('Error updating percentage. Please try again.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Modifică procentajul propriu la proiect</h1>

      <label className="inputLabel">
        ID Team Leader:
        <input
          type="text"
          className="textInput"
          value={teamLeaderId}
          onChange={(e) => setTeamLeaderId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        ID Proiect:
        <input
          type="text"
          className="textInput"
          value={proiectId}
          onChange={(e) => setProiectId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Procentaj:
        <input
          type="text"
          className="textInput"
          value={procentaj}
          onChange={(e) => setProcentaj(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
        Modifică Procentaj
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Modificarea procentajului a fost realizată cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default ProcentajPropriu;
