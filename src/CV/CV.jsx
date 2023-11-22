// CVForm.js
import React from 'react';
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

const Form = () => (
  <div>
    <FormInput description="Full Name" placeholder="Enter your full name" type="text" />
    <FormInput description="Email" placeholder="Enter your email" type="text" />
    <FormInput description="Phone" placeholder="Enter your phone number" type = "text" />
    <FormInput description="Experience" placeholder = "Enter the experience you have" type = "text" />
    {/* Alte câmpuri ale formularului */}
    <br />
    <button type="submit">Submit CV</button>
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
    <button onClick={onBackClick}>Back to Homepage</button>
  </div>
);

export default CVForm;
