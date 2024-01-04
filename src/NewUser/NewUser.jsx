import React, { useState } from 'react';
import './NewUser.css';

const NewUserForm = ({ onBackClick }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = async () => {
    if (!lastName || !firstName || !email || !password) {
      alert('Please fill in all fields before creating an account.');
      return;
    }
  
    const userData = {
      nume: lastName,
      prenume: firstName,
      email: email,
      password: password
    };
  
    try {
      const response = await fetch('http://localhost:8080/clienti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        console.log('Account created successfully');
        setIsSubmissionSuccessful(true);
      } else {
        console.error('Failed to create account');
        alert('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('An error occurred. Please try again later.');
    }
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
