import React, { useState } from 'react';
import './Promovari.css';

const Promovari = ({ onBackClick }) => {
  const [ceoID, setCeoID] = useState('');
  const [angajatID, setAngajatID] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handlePromovareClick = async () => {
    if (!ceoID || !angajatID) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/ceos/promoveaza/${ceoID}/${angajatID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Promotion successful!');
        setIsSubmissionSuccessful(true);
      } else if (response.status === 404) {
        alert('Employee not found.');
      } else {
        alert('Error promoting employee.');
      }
    } catch (error) {
      console.error('Error during promotion:', error);
      alert('Error promoting employee.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Promoveaza angajatii la TeamLeader</h1>

      <label className="inputLabel">
        CEO ID:
        <input
          type="text"
          className="textInput"
          value={ceoID}
          onChange={(e) => setCeoID(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Angajat ID:
        <input
          type="text"
          className="textInput"
          value={angajatID}
          onChange={(e) => setAngajatID(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handlePromovareClick}>
        Promovare
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Promovarea a fost realizata cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default Promovari;
