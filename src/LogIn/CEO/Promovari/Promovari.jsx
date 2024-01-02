// AlegeTL.jsx

import React, { useState } from 'react';
import './Promovari.css';

const Promovari = () => {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = () => {
    if (!title1 || !title2) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { title1, title2});

    // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
    setIsSubmissionSuccessful(true);
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Promoveaza angajatii la TeamLeader</h1>

      <label className="inputLabel">
        CEO ID:
        <input
          type="text"
          className="textInput"
          value={title1}
          onChange={(e) => setTitle1(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Angajat ID:
        <input
          type="text"
          className="textInput"
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
          Promovare
        </button>

        {isSubmissionSuccessful && (
          <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
            Promovarea a fost realizata cu succes.
          </p>
        )}
    
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default Promovari;
