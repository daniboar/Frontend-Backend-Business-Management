import React, { useState } from 'react';
import './CerereProiect.css';

const CerereProiectForm = ({ onBackClick }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [alteObservatii, setAlteObservatii] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = () => {
    if (!lastName || !firstName || !email || !projectDescription) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { lastName, firstName, email, projectDescription, alteObservatii });

    // Setează starea pentru afișarea mesajului de succes
    setIsSubmissionSuccessful(true);
  };

  return (
    <div id="cerereProiectForm">
      <div className="form-container">
        <FormHeader title="Cerere Proiect" />
        <div className="form-fields">
          <FormInput
            description="Last Name"
            placeholder="Enter your last name"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormInput
            description="First Name"
            placeholder="Enter your first name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormInput
            description="Email"
            placeholder="Enter your email"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            description="Project Description"
            placeholder="Enter the description for the project"
            type="text"
            required
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <FormInput
            description="Other Observations"
            placeholder="Write there other observations you have about the project"
            type="text"
            value={alteObservatii}
            onChange={(e) => setAlteObservatii(e.target.value)}
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

export default CerereProiectForm;
