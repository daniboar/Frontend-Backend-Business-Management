// VizualizareA.jsx

import React, { useState } from 'react';
import './VizualizareC.css';

const VizualizareC = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare clienti!');
  };

  return (
    <div className="vizualizare-container">
      <h1>Vizualizare Clienti</h1>

      <label>
        Clientii firmei:
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

export default VizualizareC;
