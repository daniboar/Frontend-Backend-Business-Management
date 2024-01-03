// VizualizareA.jsx

import React, { useState } from 'react';
import './VizualizareT.css';

const VizualizareT = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAfisare = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare TeamLeaderi!');
    fetch('http://localhost:8080/ceos/teamleaders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    const teamLeaderAtributeReduse = data.map(TeamLeader => `${TeamLeader.id}: ${TeamLeader.nume} ${TeamLeader.prenume}, salariu = ${TeamLeader.salariu} RON, email = ${TeamLeader.email}`).join('\n');

    setComentariu(teamLeaderAtributeReduse);
  })
  .catch(error => {
    console.error('Eroare în timpul cererii:', error);
  });
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
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default VizualizareT;
