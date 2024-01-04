import React, { useState } from 'react';
import './CerereProiect.css';

const CerereProiect = ({ onBackClick }) => {
  const [title1, setTitle1] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmitButtonClick = () => {
    if (!title1) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { title1 });

    // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
    setIsSubmissionSuccessful(true);
  };

  return (
    <div className="pageContainer">
      {/* Adaugă un div pentru textul din colțul stânga jos */}
      <div className="colt-stanga-jos">
        Atentie, trebuie mai intai sa creezi un proiect inainte de a depune o cerere de finalizare a proiectului.
        Id-ul proiectului va fi primit dupa finalizarea cererii.
      </div>

      <h1 className="pageTitle">Depune o cerere de creare a proiectului</h1>

      <label className="inputLabel">
        ID Proiect:
        <input
          type="text"
          className="textInput"
          value={title1}
          onChange={(e) => setTitle1(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSubmitButtonClick}>
        Depune Cerere
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Cererea pentru proiect a fost realizata cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default CerereProiect;