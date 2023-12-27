import React from 'react';
import './Login.css';

const LoginForm = ({ onBackClick, onLoginClick }) => {
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <FormButton onLoginClick={onLoginClick} />
      <BackButton onBackClick={onBackClick} />
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput description="Username" placeholder="Enter your username" type="text" />
    <FormInput description="Password" placeholder="Enter your password" type="password" />

    {/* Choice Label */}
    <div className="row">
      <label>Choose the type of user:</label>
      <select defaultValue="" id="userType">
          <option value="" disabled hidden>Select the type</option>
          <option value="CEO">CEO</option>
          <option value="TeamLeader">TeamLeader</option>
          <option value="Angajat">Angajat</option>
          <option value="Client">Client</option>
      </select>
    </div>
    </div>
);

// Corrected FormButton component
const FormButton = ({ onLoginClick }) => (
  <div id="button" className="row">
    <button onClick={() => onLoginClick(document.getElementById("userType").value)}>Log In</button>
  </div>
);

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const BackButton = ({ onBackClick }) => (
  <div id="button" className="row">
    <button onClick={onBackClick}>HomePage</button>
  </div>
);

export default LoginForm;
