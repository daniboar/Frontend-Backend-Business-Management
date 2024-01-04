import React, { useState } from 'react';
import './ManagementProiecte.css';

const ManagementCereri = ({ onBackClick }) => {
  const [comentariu, setComentariu] = useState('');
  const [numeProiect, setNumeProiect] = useState('');

  const handleGestioneazaCerere = async (stare) => {
    // Assuming you have access to ceoID, you need to replace 'yourCeoIDValue' with the actual value
    const ceoID = 'yourCeoIDValue';

    if (!numeProiect) {
      alert('Please enter the project request ID before processing.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/gestioneazaCerereProiect/${ceoID}/${numeProiect}/${stare}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comentariu }),
      });

      if (response.ok) {
        console.log(`Project request ${stare ? 'approved' : 'rejected'} successfully!`);
      } else if (response.status === 404) {
        alert('Project request not found.');
      } else {
        alert(`Error ${stare ? 'approving' : 'rejecting'} the project request.`);
      }
    } catch (error) {
      console.error('Error during project request processing:', error);
      alert(`Error ${stare ? 'approving' : 'rejecting'} the project request.`);
    }
  };

  return (
    <div>
      <h1>Management cereri de proiect</h1>

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
      <button onClick={() => handleGestioneazaCerere(true)}>Acceptare</button>

      {/* Buton pentru respingere */}
      <button onClick={() => handleGestioneazaCerere(false)}>Respingere</button>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default ManagementCereri;
