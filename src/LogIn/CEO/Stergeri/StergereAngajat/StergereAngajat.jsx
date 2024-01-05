import React, { useState } from 'react';
import './StergereAngajat.css';

const StergereAngajat = ({ onBackClick }) => {
  const [angajatID, setAngajatID] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleStergereAngajatClick = async () => {
    if (!angajatID) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/ceos/angajat/${angajatID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Angajat deleted successfully!');
        setIsSubmissionSuccessful(true);
      } else if (response.status === 404) {
        alert('Angajat not found.');
      } else {
        alert('Error deleting angajat.');
      }
    } catch (error) {
      console.error('Error during angajat deletion:', error);
      alert('Error deleting angajat.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Sterge angajatii nedoriti din firma</h1>

      <label className="inputLabel">
        Angajat ID:
        <input
          type="text"
          className="textInput"
          value={angajatID}
          onChange={(e) => setAngajatID(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleStergereAngajatClick}>
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

export default StergereAngajat;
