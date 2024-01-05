// VizualizareEchipe.jsx

import React, { useState } from 'react';
import './VizualizareEchipe.css';

const VizualizareEchipe = ({ onBackClick }) => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare echipe!');
    fetch('http://localhost:8080/ceos/echipe', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Selectați doar id, nume și prenume și concatenați-le pe un singur rând
    //const echipeAtributeReduse = data.map(echipa => `${echipa.id}: ${angajat.nume} ${angajat.prenume}, salariu = ${angajat.salariu} RON, email = ${angajat.email}`).join('\n');

    // Actualizați state-ul pentru afișare
    //setComentariu(echipeAtributeReduse);
  })
  .catch(error => {
    console.error('Eroare în timpul cererii:', error);
  });
};
  return (
    <div className="vizualizare-container">
      <h1>Vizualizare Echipe din Firma</h1>

      <label>
        Echipele din cadrul firmei:
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


export default VizualizareEchipe;
