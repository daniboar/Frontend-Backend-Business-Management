import React, { useState } from 'react';
import './VerifProiecte.css';

const VerifProiecte = ({ onBackClick }) => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare proiecte!');
  };

  return (
    <div className="vizualizare-container">
      <h1>Vizualizare proiecte</h1>

      <label>
        Proiectele firmei:
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleAfisare}>Afișare</button>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default VerifProiecte;