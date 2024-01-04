import React, { useState } from 'react';
import './DatePersonaleT.css';

const DatePersonaleT = ({ onBackClick }) => {
  const [teamLeaderId, setTeamLeaderId] = useState('');
  const [text, setText] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAfisareClick = async () => {
    if (!teamLeaderId) {
      alert('Vă rugăm să completați ID-ul Team Leader-ului înainte de a trimite.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/team-leaders/${teamLeaderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Formatăm detaliile Team Leader-ului pentru a le afișa în textarea
        const teamLeaderDetails = `ID Team Leader: ${data.id}\nNume: ${data.nume}\nPrenume: ${data.prenume}\nEmail: ${data.email}\nSalariu: ${data.salariu} RON`;
        setText(teamLeaderDetails);

        // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
        setIsReadOnly(true);
        setSuccessMessage('Informațiile au fost afișate cu succes!');
      } else if (response.status === 404) {
        setText('Team Leader-ul nu a fost găsit.');
        setSuccessMessage('');
      } else {
        alert('Eroare la preluarea datelor despre Team Leader.');
      }
    } catch (error) {
      console.error('Eroare în timpul cererii:', error);
      alert('Eroare la preluarea datelor despre Team Leader.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Vizualizare Date Personale</h1>

      <label className="inputLabel">
        ID Team Leader:
        <input
          type="text"
          className="textInput"
          value={teamLeaderId}
          onChange={(e) => setTeamLeaderId(e.target.value)}
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
        Afisare
      </button>

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default DatePersonaleT;
