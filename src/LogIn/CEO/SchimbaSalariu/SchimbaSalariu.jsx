import React, { useState } from 'react';
import './SchimbaSalariu.css';

const SchimbaSalariu = ({ onBackClick }) => {
  const [ceoId, setCeoId] = useState('');
  const [angajatId, setAngajatId] = useState('');
  const [salariuNou, setSalariuNou] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSchimbaButtonClick = async () => {
    if (!ceoId || !angajatId || !salariuNou || !selectedRole) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/ceos/schimba-salariu/angajat/${ceoId}/${angajatId}/${salariuNou}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Salary change successful!');
        setIsSubmissionSuccessful(true);
      } else if (response.status === 404) {
        alert('Employee not found.');
      } else {
        alert('Error changing salary.');
      }
    } catch (error) {
      console.error('Error during salary change:', error);
      alert('Error changing salary.');
    }
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Schimba Salariul Angajatilor tai</h1>

      <label className="inputLabel">
        CEO ID:
        <input
          type="text"
          className="textInput"
          value={ceoId}
          onChange={(e) => setCeoId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Angajat ID:
        <input
          type="text"
          className="textInput"
          value={angajatId}
          onChange={(e) => setAngajatId(e.target.value)}
        />
      </label>

      <label className="inputLabel">
        Noul salariu:
        <input
          type="text"
          className="textInput"
          value={salariuNou}
          onChange={(e) => setSalariuNou(e.target.value)}
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

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default SchimbaSalariu;
