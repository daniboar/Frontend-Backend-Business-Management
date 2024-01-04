import React, { useState } from 'react';
import './Procentaj.css';

const Procentaj = ({ onBackClick }) => {
  const [id, setId] = useState('');
  const [procentaj, setProcentaj] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = async () => {
    if (!id || !procentaj) {
      alert('Vă rugăm să completați toate câmpurile înainte de a trimite.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/angajati/procentaj/${id}/${procentaj}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsSubmissionSuccessful(true);
      } else {
        alert('Eroare la actualizarea procentajului. Vă rugăm să încercați din nou.');
      }
    } catch (error) {
      console.error('Error updating percentage:', error);
      alert('Error updating percentage. Please try again.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Actualizare procentaj propriu la proiect</h1>

      <label className="inputLabel">
        ID Angajat:
        <input
          type="text"
          className="textInput"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Procentaj Nou:
        <input
          type="text"
          className="textInput"
          value={procentaj}
          onChange={(e) => setProcentaj(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleSchimbaButtonClick}>
        Actualizează
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          Actualizarea procentajului a fost realizată cu succes.
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default Procentaj;