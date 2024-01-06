import React, { useState, useEffect } from 'react';
import './ManagementCereriMarire.css';

const ManagementCereriMarire = ({ onBackClick }) => {
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
    fetch('http://localhost:8080/ceos/cereri_marire', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Selectați doar id, nume și prenume și concatenați-le pe un singur rând
    const angajatiAtributeReduse = data.map(cerere => `Id-ul cererii: ${cerere.id}, Id-ul angajatului: ${cerere.angajatId}, Starea cererii: ${cerere.cerereAprobata}`).join('\n');

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
        const response = await fetch(`http://localhost:8080/ceos/schimbaStareCerereMarire/${numeProiect}/${stare}`, {
          method: 'POST',
        });

        if (response.ok) {
          // Successfully accepted the project request
          alert(`Cerearea de marire a angajatului cu id-ul ${numeProiect} a fost acceptata.`);
          // Refresh the list of project requests
          fetchAllCereriProiect();
        } else {
          console.error('Nu s-a putut accepta cererea de marire.');
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
      <h1>Management cereri de marire</h1>

      {/* Câmpul pentru comentarii (textArea) */}
      <label>
        Cereri de marire:
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
        />
      </label>
      <br />

      {/* Eticheta și input-ul pentru ID Cerere */}
      <div className="id-container">
        <label>ID Angajat:</label>
        <input
          className="id"
          type="text"
          value={numeProiect}
          onChange={(e) => setNumeProiect(e.target.value)}
        />
      </div>
      <br />

      {/* Buton pentru afișare cereri
      <button onClick={() => fetchAllCereriProiect}>Afisare cereri</button> */}

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

export default ManagementCereriMarire;