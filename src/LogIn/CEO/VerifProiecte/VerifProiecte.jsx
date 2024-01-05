import React, { useState, useEffect } from 'react';
import './VerifProiecte.css';

const VerifProiecte = ({ onBackClick }) => {
  const [proiecte, setProiecte] = useState([]);
  const [comentariu, setComentariu] = useState('');

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/ceos/proiecte', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers you may need
        },
        // You can include credentials if needed (e.g., for authentication)
        // credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setProiecte(data);
      } else {
        console.error('Error fetching proiecte:', response.statusText);
      }
    } catch (error) {
      console.error('Error during data fetching:', error);
    }
  };

  const handleAfisare = () => {
    // Construiește șirul de text pentru fiecare proiect pe un rând
    const proiecteText = proiecte.map((proiect) => {
      return `ID: ${proiect.id}, Nume Proiect: ${proiect.numeProiect}, Procentaj: ${proiect.procentaj}, Stare Proiect: ${proiect.stareProiect}, Client : ${proiect.clientId}`;
    }).join('\n');

    // Setează comentariul cu șirul construit
    setComentariu(proiecteText);
  };

  return (
    <div className="vizualizare-container">
      <h1>Vizualizare proiecte</h1>

      <label>
        Proiectele firmei:
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

export default VerifProiecte;
