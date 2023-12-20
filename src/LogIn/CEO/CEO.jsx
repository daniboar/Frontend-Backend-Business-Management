import React, { useEffect } from 'react';
import './CEO.css';

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
const FormTitle = (props) => <p id="formTitle">{props.title}</p>;

  return (
    <div className="ceo-page">
      <div className="container">
        <FormHeader title="Bun venit, CEO!" />
        <FormTitle title="Gestioneaza proiectele si echipele" />
        <div className="button-container-ceo">
          <button>Verificare Proiecte</button>
          <button>Promovari</button>
          <button>Modificare salariu</button>
          <button>Vizualizare cererei de proiecte</button>
          <button>Asignare Team Leader</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );

export default CEO;
