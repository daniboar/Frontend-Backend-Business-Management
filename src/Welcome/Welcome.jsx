import React from 'react';
import './Welcome.css';

function Welcome({ onLoginClick, onAboutUs, onApplyProjectClick }) {
  return (
    <div className="welcome-container">
      <h1>Welcome to Business Management</h1>
      <p>Explore the world of business with us.</p>
      <div className="button-container-welcome">
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onApplyProjectClick}>Cerere Proiect</button>
        <button onClick={onAboutUs}>About us</button>
      </div>
      <img src="https://iconape.com/wp-content/files/zz/293997/png/La_Firma-logo.png" alt="Logo" className="logo" />
    </div>
  );
}

//<button onClick={onApplyCVClick}>Apply your CV</button>

export default Welcome;
