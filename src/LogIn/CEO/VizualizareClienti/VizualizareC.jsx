// VizualizareA.jsx

import React, { useState } from 'react';
import './VizualizareC.css';


const VizualizareC = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare clienti!');
    fetch('http://localhost:8080/ceos/clienti', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    const clientAtributeReduse = data.map(Client => `${Client.id}: ${Client.nume} ${Client.prenume}, email = ${Client.email}`).join('\n');

    setComentariu(clientAtributeReduse);
  })
  .catch(error => {
    console.error('Eroare în timpul cererii:', error);
  });
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
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default VizualizareC;
