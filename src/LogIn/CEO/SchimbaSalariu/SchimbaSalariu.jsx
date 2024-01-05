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
        console.log('Salary request approved. Proceeding with salary change.');

        // Construct the endpoint based on the selected role
        let endpoint = '';
        if (selectedRole === 'Angajat') {
          endpoint = `http://localhost:8080/ceos/schimba-salariu/angajat/${ceoId}/${angajatId}/${salariuNou}`;
        } else if (selectedRole === 'TeamLeader') {
          endpoint = `http://localhost:8080/ceos/schimba-salariu/teamleader/${ceoId}/${angajatId}/${salariuNou}`;
        } else {
          alert('Invalid role selected.');
          return;
        }

        // Make the request to change the salary
        const responseSchimbaSalariu = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (responseSchimbaSalariu.ok) {
          console.log('Salary change successful!');
          setIsSubmissionSuccessful(true);
        } else if (responseSchimbaSalariu.status === 404) {
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