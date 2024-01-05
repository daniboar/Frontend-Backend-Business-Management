import React, { useState } from 'react';
import './CreareEchipa.css';

const CreareEchipa = ({ onBackClick }) => {
  const [proiectID, setProiectID] = useState('');
  const [TLID,setTLID] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = async () => {
    if (!proiectID || !TLID) {
      alert('Please fill in all fields before creating an account.');
      return;
    }
    setIsSubmissionSuccessful(true);
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
            value={proiectID}
            onChange={(e) => setProiectID(e.target.value)}
          />

          <FormInput
            description="TeamLeader ID"
            placeholder="Enter TeamLeader's ID"
            type="text"
            required
            value={TLID}
            onChange={(e) => setTLID(e.target.value)}
          />

        </div>
        <div className="form-buttons">
          <button id="submitBtn" type="submit" onClick={handleSubmit}>
            Create team
          </button>
          {isSubmissionSuccessful && (
            <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
              Echipa a fost creata cu succes.
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

export default CreareEchipa;