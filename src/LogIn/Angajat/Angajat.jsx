import React from 'react';
import './Angajat.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const Angajat = ({ onLogoutClick }) => {
  return (
    <div className="angajat-page">
      <div className="container">
        <FormHeader title="Welcome, Employee!" />
        <FormTitle title="Explore Your Work Opportunities" />
        <div className="button-container">
          <button>Cerere Marire</button>
          <button>Procentaj Proiect</button>
          <button>Vizualizare Proiect</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Angajat;
