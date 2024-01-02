// VizualizareA.jsx

import React, { useState } from 'react';
import './VizualizareA.css';

const VizualizareA = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare angajați!');
  };

  return (
    <div className="vizualizare-container">
      <h1>Vizualizare Angajati</h1>

      <label>
        Angajatii firmei:
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleAfisare}>Afișare</button>
    </div>
  );
};

export default VizualizareA;
