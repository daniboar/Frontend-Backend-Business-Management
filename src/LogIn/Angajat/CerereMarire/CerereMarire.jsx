import React, { useState } from 'react';
import './CerereMarire.css';

const CerereMarire = ({ onBackClick }) => {
  const [title1, setTitle1] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = () => {
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
        Tine minte, salariul se va modifica doar in cazul in care CEO-ul considera acest fapt. Te rugam sa nu depui o cerere de marire doar daca au trecut 4 luni de la ultima marire.
      </div>

      <h1 className="pageTitle">Depune o cerere de marire</h1>

      <label className="inputLabel">
        ID:
        <input
          type="text"
          className="textInput"
          value={title1}
          onChange={(e) => setTitle1(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
        Depune Cerere
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Cererea pentru marirea de salariu a fost depusa cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default CerereMarire;
