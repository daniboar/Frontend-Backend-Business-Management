// AlegeTL.jsx

import React, { useState } from 'react';
import './Procentaj.css';

const Procentaj = ({onBackClick}) => {
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
      <h1 className="pageTitle">Actualizeaza proncentajul propriu la proiect</h1>

      <label className="inputLabel">
        ID:
        <input
          type="text"
          className="textInput"
          value={title1}
          onChange={(e) => setTitle1(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Procentaj:
        <input
          type="text"
          className="textInput"
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
          Actualizeaza
        </button>

        {isSubmissionSuccessful && (
          <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
            Actualizarea procentajului a fost realizata cu succes.
          </p>
        )}
    
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default Procentaj;
