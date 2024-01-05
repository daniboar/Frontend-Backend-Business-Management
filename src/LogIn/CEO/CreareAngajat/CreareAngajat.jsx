import React, { useState } from 'react';
import './CreareAngajat.css';

const CreareAngajat = ({ onBackClick }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [salariu,setSalariu] = useState('');
  const [procentaj,setProcentaj] = useState('');
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  const handleSubmit = async () => {
    if (!lastName || !firstName || !email || !password || !salariu || !procentaj) {
      alert('Please fill in all fields before creating an account.');
      return;
    }
  
    const userData = {
      nume: lastName,
      prenume: firstName,
      email: email,
      password: password,
      salariu: salariu,
      procentaj: procentaj
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
        <FormHeader title="Create an account for the new employee" />
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
            placeholder="Enter the password for their account"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        <FormInput
            description="Salariu"
            placeholder="Enter their salary"
            type="salariu"
            required
            value={salariu}
            onChange={(e) => setSalariu(e.target.value)}
          />

        <FormInput
            description="Procentaj"
            placeholder="Type 0"
            type="procentaj"
            required
            value={procentaj}
            onChange={(e) => setProcentaj(e.target.value)}
          />

        </div>
        <div className="form-buttons">
          <button id="submitBtn" type="submit" onClick={handleSubmit}>
            Create account
          </button>
          {isSubmissionSuccessful && (
            <p style={{ color: 'green', marginTop: '8px', fontSize: '20px' }}>
              Contul angajatului a fost creat si adaugat in baza de date.
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

export default CreareAngajat;
