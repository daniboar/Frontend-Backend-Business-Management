// VizualizareA.jsx

import React, { useState } from 'react';
import './VizualizareA.css';

const VizualizareA = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare angajați!');
    fetch('http://localhost:8080/ceos/angajati', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Selectați doar id, nume și prenume și concatenați-le pe un singur rând
    const angajatiAtributeReduse = data.map(angajat => `${angajat.id}: ${angajat.nume} ${angajat.prenume}, salariu = ${angajat.salariu} RON, email = ${angajat.email}`).join('\n');

    // Actualizați state-ul pentru afișare
    setComentariu(angajatiAtributeReduse);
  })
  .catch(error => {
    console.error('Eroare în timpul cererii:', error);
  });
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
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default VizualizareA;
