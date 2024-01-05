import React, { useState } from 'react';
import './ManagementProiecte.css';

const ManagementCereri = ({ onBackClick }) => {
  const [comentariu, setComentariu] = useState('');
  const [numeProiect, setNumeProiect] = useState('');

  const handleGestioneazaCerere = async (stare) => {
    // Assuming you have access to ceoID, you need to replace 'yourCeoIDValue' with the actual value

    if (!numeProiect) {
      alert('Please enter the project request ID before processing.');
      return;
    }
  };

  return (
    <div>
      <h1>Management cereri de proiect</h1>

      {/* Câmpul pentru comentarii (textArea) */}
      <label>
        Cereri de proiecte:
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
        />
      </label>
      <br />

      {/* Eticheta și input-ul pentru ID Cerere */}
      <div className="id-container">
        <label>ID Cerere:</label>
        <input
          className="id"
          type="text"
          value={numeProiect}
          onChange={(e) => setNumeProiect(e.target.value)}
        />
      </div>
      <br />

      {/* Buton pentru respingere */}
      <button className="rej" onClick={() => handleGestioneazaCerere(false)}>Afisare cereri</button>

      {/* Buton pentru acceptare */}
      <button className="acc" onClick={() => handleGestioneazaCerere(true)}>Acceptare</button>

      {/* Buton Back */}
      <button className="backButton" onClick={onBackClick}>Back</button>
    </div>
  );
};

export default ManagementCereri;
