import React from 'react';
import './SefSectie.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

const SefSectie = ({ onLogoutClick }) => {
  return (
    <div className="sefSectie-page">
     <div className="container">
        <FormHeader title="Bun venit, sefule!" />
        <FormTitle title="Gestioneaza echipa" />
        <div className="button-container-sefSectie">
          <button>Alegere Team Leader</button>
          <button>Asignare Proiect</button>
          <button>Gestiune Proiect</button>
          <button>Verificare Mariri</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SefSectie;
