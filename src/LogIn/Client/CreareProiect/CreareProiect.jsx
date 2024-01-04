import React, { useState } from 'react';
import './CreareProiect.css';

const CreareProiectForm = ({ onBackClick }) => {
  const [projectName, setProjectName] = useState('');
  const [idClient, setIdClient] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = async () => {
    if (!projectName || !idClient) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/clienti/proiect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectName, idClient }),
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
    <div id="cerereProiectForm">
      <div className="form-container">
        <FormHeader title="Creare Proiect" />
        <div className="form-fields">
          <FormInput
            description="Project Name"
            placeholder="Enter the project's name"
            type="text"
            required
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <FormInput
            description="Client ID"
            placeholder="Enter your ID"
            type="text"
            required
            value={idClient}
            onChange={(e) => setIdClient(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button id="submitBtn" type="submit" onClick={handleSubmit}>
            Submit Project
          </button>
          {isSubmissionSuccessful && (
            <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
              Cererea dvs. pentru proiect a fost trimisă. Veți primi un răspuns printr-un email în cel mai scurt timp posibil.
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
    <button onClick={onBackClick}>Back to Homepage</button>
  </div>
);

export default CreareProiectForm;
