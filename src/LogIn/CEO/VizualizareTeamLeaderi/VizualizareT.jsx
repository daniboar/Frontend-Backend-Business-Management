// VizualizareA.jsx

import React, { useState } from 'react';
import './VizualizareT.css';

const VizualizareT = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare TeamLeaderi!');
  };

  return (
    <div className="vizualizare-container">
      <h1>Vizualizare TeamLeaderi</h1>

      <label>
        TeamLeaderii din firma:
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

export default VizualizareT;
