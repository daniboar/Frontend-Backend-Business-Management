import React, { useState } from 'react';
import './DatePersonale.css';

const DatePersonale = () => {
  const [text, setText] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAfisareClick = () => {
    setIsReadOnly(true);
    setText('Aici apare conținutul dorit.');
    setSuccessMessage('Informatiile au fost afisate cu succes!');
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Vizualizare Date Personale</h1>

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

      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default DatePersonale;