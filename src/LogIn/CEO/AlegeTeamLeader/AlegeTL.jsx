// AlegeTL.jsx

import React, { useState } from 'react';
import './AlegeTL.css';

const AlegeTL = () => {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = () => {
    if (!title1 || !title2 || !title3) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { title1, title2, title3});

    // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
    setIsSubmissionSuccessful(true);
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Atribuie TeamLeader unei echipe</h1>

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
        Echipa ID:
        <input
          type="text"
          className="textInput"
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        TeamLeader ID:
        <input
          type="text"
          className="textInput"
          value={title3}
          onChange={(e) => setTitle3(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
          Atribuie
        </button>

        {isSubmissionSuccessful && (
          <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
            Atribuirea la echipa a avut succes.
          </p>
        )}
    
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default AlegeTL;
