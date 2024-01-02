import React from 'react';
import './Client.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const Client = ({ onLogoutClick }) => {
  return(
    <div className="client-page">
      <div className="container">    
        <FormHeader title="Bun venit, draga client!" />
        <FormTitle title="Verifica proiectul/proiectele tale" />
        <div className="button-container-client">
          <button>Verificare Proiecte</button>
          <button>Cerere Proiect</button>
          <button>Vizualizare date personale</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Client;
