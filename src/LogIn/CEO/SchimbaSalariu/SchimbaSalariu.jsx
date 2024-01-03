// SchimbaSalariu.jsx

import React, { useState } from 'react';
import './SchimbaSalariu.css';

const SchimbaSalariu = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = () => {
    if (!title1 || !title2 || !title3 || !selectedRole) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { title1, title2, title3, selectedRole });

    // Setează starea pentru afișarea mesajului de succes și șterge mesajul de eroare
    setIsSubmissionSuccessful(true);
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Schimba Salariul Angajatilor tai</h1>

      <label className="inputLabel">
        CEO ID:
        <input
          type="text"
          className="textInput"
          value={title1}
          onChange={(e) => setTitle1(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Angajat ID:
        <input
          type="text"
          className="textInput"
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Noul salariu:
        <input
          type="text"
          className="textInput"
          value={title3}
          onChange={(e) => setTitle3(e.target.value)}
        />
      </label>

      <div className="selectContainer">
        <label className="selectLabel">
          Tip de Angajat:
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="selectInput"
          >
            <option value="">Alege...</option>
            <option value="Angajat">Angajat</option>
            <option value="TeamLeader">Team Leader</option>
          </select>
        </label>

        <button className="schimbaButton" onClick={handleSchimbaButtonClick}>
          Schimba
        </button>

        {isSubmissionSuccessful && (
          <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
            Schimbare realizata cu succes.
          </p>
        )}
      </div>

      <button className="backButton">
        Back
      </button>
    </div>
  );
};

export default SchimbaSalariu;
