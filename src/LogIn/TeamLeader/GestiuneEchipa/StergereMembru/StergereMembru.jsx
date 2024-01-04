import React, { useState } from 'react';
import './StergereMembru.css';

const StergereMembru = ({ onBackClick }) => {
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [angajatId, setAngajatId] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleEliminaDinEchipaClick = async () => {
    if (!teamLeaderId || !angajatId) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/team-leaders/echipa/${teamLeaderId}/${angajatId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
      });

      if (response.ok) {
        // Logica pentru tratarea datelor la submit
        console.log('Form submitted:', { teamLeaderId, angajatId });

        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsSubmissionSuccessful(true);
      } else if (response.status === 404) {
        alert('Team Leader-ul sau angajatul nu au fost găsite.');
      } else {
        alert('Eroare la eliminarea angajatului din echipă.');
      }
    } catch (error) {
      console.error('Eroare în timpul cererii:', error);
      alert('Eroare la eliminarea angajatului din echipă.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Elimina un angajat din echipa ta</h1>

      <label className="inputLabel">
        ID TeamLeader:
        <input
          type="text"
          className="textInput"
          value={teamLeaderId}
          onChange={(e) => setTeamLeaderId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        ID Angajat:
        <input
          type="text"
          className="textInput"
          value={angajatId}
          onChange={(e) => setAngajatId(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleEliminaDinEchipaClick}>
        Elimina din echipa
      </button>

      {isSubmissionSuccessful && (
        <p className="successMessage">
          Eliminarea angajatului din echipa s-a realizat cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default StergereMembru;
