import React, { useState, useEffect } from 'react';
import './ManagementProiecte.css';

const ManagementCereri = ({ onBackClick }) => {
  const [comentariu, setComentariu] = useState('');
  const [numeProiect, setNumeProiect] = useState('');
  const [cereriProiect] = useState([]);

  useEffect(() => {
    // Fetch all project requests when the component mounts
    fetchAllCereriProiect();
  }, []);

  const fetchAllCereriProiect = () => {
    // Logica pentru acțiunea de afișare
    console.log('Afișare angajați!');
    fetch('http://localhost:8080/ceos/cereri_proiect', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Selectați doar id, nume și prenume și concatenați-le pe un singur rând
    const angajatiAtributeReduse = data.map(cerere => `Id-ul cererii: ${cerere.id}, Starea cererii: ${cerere.aprobata}`).join('\n');

    // Actualizați state-ul pentru afișare
    setComentariu(angajatiAtributeReduse);
  })
  .catch(error => {
    console.error('Eroare în timpul cererii:', error);
  });
};

  const handleGestioneazaCerere = async (stare) => {
    if (stare) {
      // If 'Accept' button is clicked, handle the specific request by ID
      if (!numeProiect) {
        alert('Please enter the project request ID before processing.');
        return;
      }

      try {
        // Assuming you have access to ceoID, replace 'yourCeoIDValue' with the actual value
        const response = await fetch(`http://localhost:8080/ceos/gestioneazaCerereProiect/${numeProiect}/${stare}`, {
          method: 'POST',
        });

        if (response.ok) {
          // Successfully accepted the project request
          alert(`Project request ${numeProiect} has been accepted.`);
          // Refresh the list of project requests
          fetchAllCereriProiect();
        } else {
          console.error('Failed to accept project request.');
        }
      } catch (error) {
        console.error('Error during accept:', error);
      }
    } else {
      // If 'Display Requests' button is clicked, simply refresh the list
      fetchAllCereriProiect();
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

      {/* Buton pentru afișare cereri */}
      <button onClick={() => fetchAllCereriProiect}>Afisare cereri</button>

      {/* Buton pentru acceptare */}
      <button className="acc" onClick={() => handleGestioneazaCerere(true)}>Acceptare</button>

      {/* Buton Back */}
      <button className="backButton" onClick={onBackClick}>Back</button>

      {/* Lista cererilor de proiect */}
      <ul>
        {cereriProiect.map((cerere) => (
          <li key={cerere.id}>{cerere.numeProiect}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManagementCereri;