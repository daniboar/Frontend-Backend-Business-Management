import React, { useState } from 'react';
import './CerereMarire.css';

const CerereMarire = ({ onBackClick }) => {
  const [angajatId, setAngajatId] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleDepuneCerereClick = async () => {
    if (!angajatId) {
      alert('Vă rugăm să completați ID-ul înainte de a trimite.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/angajati/adauga-cerere-marire/${angajatId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmissionSuccessful(true);
      } else {
        setIsSubmissionSuccessful(false);
        alert('Eroare la depunerea cererii. Vă rugăm să încercați din nou.');
      }
    } catch (error) {
      console.error('Eroare în timpul cererii:', error);
      setIsSubmissionSuccessful(false);
      alert('Eroare la depunerea cererii. Vă rugăm să încercați din nou.');
    }
  };

  return (
    <div className="pageContainer">
      {/* Adaugă un div pentru textul din colțul stânga jos */}
      <div className="colt-stanga-jos">
        Tine minte, salariul se va modifica doar in cazul in care CEO-ul considera acest fapt. Te rugam sa nu depui o cerere de marire doar daca au trecut 4 luni de la ultima marire.
      </div>

      <h1 className="pageTitle">Depune o cerere de marire</h1>

      <label className="inputLabel">
        ID Angajat:
        <input
          type="text"
          className="textInput"
          value={angajatId}
          onChange={(e) => setAngajatId(e.target.value)}
        />
      </label>

      <button className="atribuieButton" onClick={handleDepuneCerereClick}>
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