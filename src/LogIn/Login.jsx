import React, { useState } from 'react';
import './Login.css';

const LoginForm = ({ onBackClick, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLoginClick = () => {
    onLoginClick(userType, email, password);
  };

  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        userType={userType}
        setUserType={setUserType}
      />
      <FormButton onLoginClick={handleLoginClick} />
      <BackButton onBackClick={onBackClick} />
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = ({ email, setEmail, password, setPassword, userType, setUserType }) => (
  <div>
    <FormInput
      id="email"
      description="Email"
      placeholder="Enter your email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <FormInput
      id="password"
      description="Password"
      placeholder="Enter your password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    {/* Choice Label */}
    <div className="row">
      <label>Choose the type of user:</label>
      <select
        defaultValue=""
        id="userType"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="" disabled hidden>Select the type</option>
        <option value="CEO">CEO</option>
        <option value="TeamLeader">TeamLeader</option>
        <option value="Angajat">Angajat</option>
        <option value="Client">Client</option>
      </select>
    </div>
  </div>
);

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

const FormButton = ({ onLoginClick }) => (
  <div id="button" className="row">
    <button onClick={onLoginClick}>Log In</button>
  </div>
);


const BackButton = ({ onBackClick }) => (
  <div id="button" className="row">
    <button onClick={onBackClick}>HomePage</button>
  </div>
);

export default LoginForm;