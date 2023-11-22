import React from 'react';
import './Login.css';

const LoginForm = ({ onBackClick}) => {
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

const BackButton = ({onBackClick}) => (
  <div id = "button" className="row">
    <button onClick={onBackClick}>HomePage</button>
  </div>
)

export default LoginForm;
