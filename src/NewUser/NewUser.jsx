import React, { useState } from 'react';
import './NewUser.css';

const NewUserForm = ({ onBackClick }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = () => {
    if (!lastName || !firstName || !email || !password) {
      alert('Please fill in all fields before creating account.');
      return;
    }

    // Logica pentru tratarea datelor la submit
    console.log('Form submitted:', { lastName, firstName, email, password });

    // Setează starea pentru afișarea mesajului de succes
    setIsSubmissionSuccessful(true);
  };

  return (
    <div id="newUserForm">
      <div className="form-container">
        <FormHeader title="Create Account" />
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
            description="Password"
            placeholder="Enter the password for your account"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>
        <div className="form-buttons">
          <button id="submitBtn" type="submit" onClick={handleSubmit}>
            Create account
          </button>
          {isSubmissionSuccessful && (
            <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
              Contul dvs. a fost creat cu succes. Vă veți putea loga pe site în cel mai scurt timp posibil.
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

export default NewUserForm;
