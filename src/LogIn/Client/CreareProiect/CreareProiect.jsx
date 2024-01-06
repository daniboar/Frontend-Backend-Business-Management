import React, { useState } from 'react';
import './CreareProiect.css';

const CreareProiectForm = ({ onBackClick }) => {
  const [nume_proiect, setProjectName] = useState('');
  const [client_id, setIdClient] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = async () => {
    if (!nume_proiect || !client_id) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/clienti/proiect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numeProiect: nume_proiect, clientId: client_id }),
      });

      if (response.ok) {
        // Setează starea pentru afișarea mesajului de succes
        setIsSubmissionSuccessful(true);
      } else {
        alert('Error submitting project. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Error submitting project. Please try again.');
    }
  };

  return (
    <div id="newUserForm">
      <div className="form-container">
        <FormHeader title="Create a new team" />
        <div className="form-fields">
          <FormInput
            description="Project ID"
            placeholder="Enter project's ID"
            type="text"
            required
            value={nume_proiect}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <FormInput
            description="TeamLeader ID"
            placeholder="Enter TeamLeader's ID"
            type="text"
            required
            value={client_id}
            onChange={(e) => setIdClient(e.target.value)}
          />

        </div>
        <div className="form-buttons">
          <button id="submitBtn" type="submit" onClick={handleSubmit}>
            Creare Proiect
          </button>
          {isSubmissionSuccessful && (
            <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
              Proiectul a fost creat cu succes.
            </p>
          )}
        </div>
      </div>
      <BackButton onBackClick={onBackClick} />
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

const BackButton = ({ onBackClick }) => (
  <div id="button" className="row">
    <button onClick={onBackClick}>Back</button>
  </div>
);

export default CreareProiectForm;
