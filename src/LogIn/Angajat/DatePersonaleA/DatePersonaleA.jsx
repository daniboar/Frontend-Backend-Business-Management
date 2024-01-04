import React, { useState } from 'react';
import './DatePersonaleA.css';

const DatePersonaleA = ({ onBackClick }) => {
  const [id, setId] = useState('');
  const [text, setText] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAfisareClick = async () => {
    if (!id) {
      alert('Vă rugăm să completați ID-ul înainte de a trimite.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/angajati/${id}`);
      const data = await response.json();

      if (data && data.nume) {
        // Formatăm detaliile angajatului pentru a le afișa în textarea
        const angajatDetails = `ID Angajat: ${data.id}\nNume: ${data.nume}\nPrenume: ${data.prenume}\nEmail: ${data.email}\nSalariu: ${data.salariu} RON`;
        setText(angajatDetails);
        setIsReadOnly(true);
        setSuccessMessage('Informațiile au fost afișate cu succes!');
      } else {
        setText('Nu s-au găsit detalii despre angajat.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Eroare în timpul cererii:', error);
      setText('Eroare la preluarea datelor despre angajat.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Vizualizare Date Personale</h1>

      <label className="inputLabel">
        ID Angajat:
        <input
          type="text"
          className="textInput"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>

      <textarea
        className="customTextArea"
        placeholder="Detalii aici..."
        value={text}
        readOnly={isReadOnly}
      />

      {successMessage && <p className="successMessage">{successMessage}</p>}

      <button className="atribuieButton" onClick={handleAfisareClick}>
        Afișare
      </button>

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default DatePersonaleA;
