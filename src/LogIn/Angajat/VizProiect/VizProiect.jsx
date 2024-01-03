import React, { useState } from 'react';
import './VizProiect.css';

const VizProiect = () => {
  const [id, setId] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
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

      <button className="atribuieButton" onClick={handleAfisareButtonClick}>
        Afisare
      </button>

      <textarea
        className="customTextArea"
        placeholder="Detalii aici..."
        value=''
        readOnly={isReadOnly}
      />

      {successMessage && (
        <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
          {successMessage}
        </p>
      )}

      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default VizProiect;
