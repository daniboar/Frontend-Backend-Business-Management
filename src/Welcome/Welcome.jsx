import React from 'react';
import './Welcome.css';

function Welcome({ onLoginClick, onApplyCVClick }) {
  return (
    <div className="welcome-container">
      <h1>Welcome to Business Management</h1>
      <p>Explore the world of business with us.</p>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onApplyCVClick}>Apply your CV</button>
      <img src ="https://iconape.com/wp-content/files/zz/293997/png/La_Firma-logo.png" alt="Logo" className="logo" />
    </div>
  );
}

export default Welcome;
