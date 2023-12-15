import React from 'react';
import './Client.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const Client = ({ onLogoutClick }) => {
  return (
    <div className="client-page">
      <div className="container">    
        <FormHeader title="Bun venit, client!" />
        <FormTitle title="Verifica proiectele tale" />
        <div className="button-container-client">
          <button>Verificare Proiecte</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Client;
