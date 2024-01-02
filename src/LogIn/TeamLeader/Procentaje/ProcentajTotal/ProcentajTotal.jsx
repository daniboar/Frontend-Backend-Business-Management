// ProcentajTotal.jsx

import React, { useState } from 'react';
import './ProcentajTotal.css';

const ProcentajTotal= () => {
  const [title1, setTitle1] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = () => {
    if (!title1) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { title1});

    // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
    setIsSubmissionSuccessful(true);
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Actualizeaza procentajul total al proiectului </h1>

      <label className="inputLabel">
        ID TeamLeader:
        <input
          type="text"
          className="textInput"
          value={title1}
          onChange={(e) => setTitle1(e.target.value)}
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
    
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default ProcentajTotal;
