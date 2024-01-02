// Numele fișierului: ManagementCereri.jsx

import React, { useState } from 'react';
import './ManagementProiecte.css';

const ManagementCereri = () => {
  const [comentariu, setComentariu] = useState('');
  const [titluCerere, setTitluCerere] = useState('');
  const [numeProiect, setNumeProiect] = useState('');

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

      {/* Primul câmp de text cu un text asociat */}
      <label>
        ID Proiect: 
        <input
          type="text"
          value={titluCerere}
          onChange={(e) => setTitluCerere(e.target.value)}
        />
      </label>
      <br />

      {/* Al doilea câmp de text cu un text asociat */}
      <label>
        ID Cerere: 
        <input
          type="text"
          value={numeProiect}
          onChange={(e) => setNumeProiect(e.target.value)}
        />
      </label>
      <br />

      {/* Câmpul pentru comentarii (textArea) */}
      <label>
        Cereri de proiecte:
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
        />
      </label>
      <br />

      {/* Buton pentru acceptare */}
      <button onClick={handleAcceptare}>Acceptare</button>

      {/* Buton pentru respingere */}
      <button onClick={handleRespingere}>Respingere</button>
      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default ManagementCereri;
