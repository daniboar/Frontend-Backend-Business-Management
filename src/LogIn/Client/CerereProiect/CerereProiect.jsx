import React, { useState } from 'react';
import './CerereProiect.css';

const CerereProiect = ({ onBackClick }) => {
  const [proiectId, setProiectId] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmitButtonClick = async () => {
    if (!proiectId) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/clienti/adauga_cerere_proiect/${proiectId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
        // Add body data here if needed
      });

      if (response.ok) {
        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsSubmissionSuccessful(true);
      } else {
        alert('Error submitting project request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting project request:', error);
      alert('Error submitting project request. Please try again.');
    }
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
          value={proiectId}
          onChange={(e) => setProiectId(e.target.value)}
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
