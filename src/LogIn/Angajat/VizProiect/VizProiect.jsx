import React, { useState } from 'react';
import './VizProiect.css';

const VizProiect = ({ onBackClick }) => {
  const [id, setId] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare Proiecte!');
    fetch(`http://localhost:8080/angajati/proiect/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.numeProiect) {
          // Formatăm detaliile proiectului pentru a le afișa în textarea
          const proiectDetails = `ID Proiect: ${data.id}\nNume Proiect: ${data.numeProiect}\nProcentaj: ${data.procentaj}%\nStare Proiect: ${data.stareProiect}\nClient ID: ${data.clientId}`;
          setComentariu(proiectDetails);
        } else {
          setComentariu('Nu s-au găsit detalii despre proiect.');
        }
      })
      .catch(error => {
        console.error('Eroare în timpul cererii:', error);
        setComentariu('Eroare la preluarea datelor despre proiect.');
      });
  };

  const handleAfisareButtonClick = () => {
    if (!id) {
      alert('Vă rugăm să completați toate câmpurile înainte de a trimite.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { id });

    // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
    setIsReadOnly(true);
    setSuccessMessage('Detaliile despre proiect au fost afișate cu succes.');
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Vizualizare informatii despre proiect</h1>

      <label className="inputLabel">
        ID:
        <input
          type="text"
          className="textInput"
          value={id}
          onChange={(e) => setId(e.target.value)}
          readOnly={isReadOnly}
        />
      </label>

      <button className="atribuieButton" onClick={handleAfisare}>
        Afisare
      </button>

      <textarea
        className="customTextArea"
        placeholder="Detalii aici..."
        value={comentariu}
        readOnly={isReadOnly}
      />

      {successMessage && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          {successMessage}
        </p>
      )}

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default VizProiect;
