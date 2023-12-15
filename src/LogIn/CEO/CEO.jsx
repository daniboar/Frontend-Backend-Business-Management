import React from 'react';
import './CEO.css'; // Asigurați-vă că calea este corectă

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const CEO = ({ onLogoutClick }) => {
  return (
    <div className="ceo-page">
      <div className="container">
        <FormHeader title="Welcome, CEO!" />
        <FormTitle title="Manage Your Projects and Team" />
        <div className="button-container-ceo">
          <button>Verificare Proiecte</button>
          <button>Promovari</button>
          <button>Modificare salariu</button>
          <button>Vizualizare cererei de proiecte</button>
          <button>Verificare CV-uri</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default CEO;
