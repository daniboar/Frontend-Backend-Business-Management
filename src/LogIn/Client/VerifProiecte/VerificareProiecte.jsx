import React, { useState } from 'react';
import './VerificareProiecte.css';

const VerificareProiecte = ({ onBackClick }) => {
  const [clientId, setClientId] = useState('');
  const [text, setText] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAfisareClick = async () => {
    if (!clientId) {
      alert('Vă rugăm să completați ID-ul clientului înainte de a trimite.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/clienti/proiecte/${clientId}`);
      const data = await response.json();

      if (data && data.length > 0) {
        // Formatăm detaliile proiectelor pentru a le afișa în textarea
        const proiecteDetails = data.map((proiect) => (
          `ID Proiect: ${proiect.id}\nNume Proiect: ${proiect.nume}\nData început: ${proiect.dataInceput}\nData sfârșit: ${proiect.dataSfarsit}\n\n`
        )).join('');
        
        setText(proiecteDetails);
        setIsReadOnly(true);
        setSuccessMessage('Informațiile despre proiecte au fost afișate cu succes!');
      } else {
        setText('Nu s-au găsit proiecte pentru acest client.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Eroare în timpul cererii:', error);
      setText('Eroare la preluarea datelor despre proiecte.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Vizualizare Proiecte proprii</h1>

      <label className="inputLabel">
        ID Client:
        <input
          type="text"
          className="textInput"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
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
        Afișare Proiecte
      </button>

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default VerificareProiecte;
