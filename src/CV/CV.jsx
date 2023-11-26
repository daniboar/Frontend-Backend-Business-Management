import React, { useState } from 'react';
import './CV.css';

const CVForm = ({ onBackClick }) => {
  return (
    <div id="cvform">
      <FormHeader title="CV Submission" />
      <Form />
      <BackButton onBackClick={onBackClick} />
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = () => {
    if (!fullName || !email || !phone || !experience) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { fullName, email, phone, experience });

    // Setează starea pentru afișarea mesajului de succes
    setIsSubmissionSuccessful(true);
  };

  return (
    <div>
      <FormInput
        description="Full Name"
        placeholder="Enter your full name"
        type="text"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
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
        description="Phone"
        placeholder="Enter your phone number"
        type="text"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <FormInput
        description="Experience"
        placeholder="Enter the experience you have"
        type="text"
        required
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <br />
      <button id="submitBtn" type="submit" onClick={handleSubmit}>
        Submit CV
      </button>

      {isSubmissionSuccessful && (
        <p style={{ color: 'green', marginTop: '8px', fontSize : '20px'}}>
          CV-ul dvs. a fost depus, așteptați un răspuns pe email care va veni în cel mai scurt timp.
        </p>
      )}
    </div>
  );
};

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

export default CVForm;
