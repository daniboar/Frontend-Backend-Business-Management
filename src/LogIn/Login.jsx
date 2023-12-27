import React from 'react';
import './Login.css';

const LoginForm = ({ onBackClick }) => {
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
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
      <select defaultValue="">
        <option value="" disabled hidden>Select the type</option>
        <option value="option1">CEO</option>
        <option value="option2">TeamLeader</option>
        <option value="option3">Angajat</option>
        <option value="option4">Client</option>
      </select>
    </div>

    <FormButton title="Log in" />
  </div>
);

const FormButton = (props) => (
  <div id="button" className="row">
    <button>{props.title}</button>
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
