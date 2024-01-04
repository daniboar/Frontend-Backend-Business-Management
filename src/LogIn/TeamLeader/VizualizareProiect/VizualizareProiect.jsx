import React, { useState } from 'react';
import './VizualizareProiect.css';

const VizualizareDetaliiProiect = ({ onBackClick }) => {
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [proiectDetails, setProiectDetails] = useState('');

  const handleAfisareButtonClick = async () => {
    if (!teamLeaderId) {
      alert('Vă rugăm să completați ID-ul Team Leader-ului înainte de a trimite.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/team-leaders/proiect/${teamLeaderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Formatăm detaliile proiectului pentru a le afișa în textarea
        const detaliiProiect = `ID Proiect: ${data.id}\nNume Proiect: ${data.nume}\nData început: ${data.dataInceput}\nData sfârșit: ${data.dataSfarsit}\n`;
        setProiectDetails(detaliiProiect);

        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsReadOnly(true);
        setSuccessMessage('Detaliile despre proiect au fost afișate cu succes.');
      } else if (response.status === 404) {
        setProiectDetails('Proiectul nu a fost găsit.');
        setSuccessMessage('');
      } else {
        alert('Eroare la preluarea datelor despre proiect.');
      }
    } catch (error) {
      console.error('Eroare în timpul cererii:', error);
      alert('Eroare la preluarea datelor despre proiect.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Vizualizare informații despre proiect pe care îl conduceți</h1>

      <label className="inputLabel">
        ID Team Leader:
        <input
          type="text"
          className="textInput"
          value={teamLeaderId}
          onChange={(e) => setTeamLeaderId(e.target.value)}
          readOnly={isReadOnly}
        />
      </label>

      <button className="atribuieButton" onClick={handleAfisareButtonClick}>
        Afișare
      </button>

      <textarea
        className="customTextArea"
        placeholder="Detalii aici..."
        value={proiectDetails}
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

export default VizualizareDetaliiProiect;
