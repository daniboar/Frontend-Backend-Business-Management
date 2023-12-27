// Numele fișierului: ManagementCereri.jsx

import React, { useState } from 'react';
import './ManagementProiecte.css';

const ManagementCereri = () => {
  const [comentariu, setComentariu] = useState('');

  const handleAcceptare = () => {
    // Logica pentru acțiunea de acceptare
    console.log('Cerere acceptată!');
  };

  const handleRespingere = () => {
    // Logica pentru acțiunea de respingere
    console.log('Cerere respinsă!');
  };

  return (
    <div>
      <h1>Management cereri de proiect</h1>
      <label>
        Cereri:
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAcceptare}>Acceptare</button>
      <button onClick={handleRespingere}>Respingere</button>
    </div>
  );
};

export default ManagementCereri;
