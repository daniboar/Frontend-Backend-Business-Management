import React, { useState } from 'react';
import './VizProiect.css';

const VizProiect = ({ onBackClick }) => {
  const [id, setId] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [projectDetails, setProjectDetails] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAfisareButtonClick = async () => {
    if (!id) {
      alert('Vă rugăm să completați toate câmpurile înainte de a trimite.');
      return;
    }

    try {
      // Make a request to your Spring Boot backend
      const response = await fetch(`/angajati/proiect/${id}`);
      const data = await response.json();

      // Update the state with project details
      setProjectDetails(data);

      // Set the state for readOnly and successMessage
      setIsReadOnly(true);
      setSuccessMessage('Detaliile despre proiect au fost afișate cu succes.');
    } catch (error) {
      console.error('Error fetching project details:', error);
      alert('Error fetching project details. Please try again.');
    }
  };

  return (
    <div className="pageContainer">
      {/* ... (existing JSX) ... */}

      <button className="atribuieButton" onClick={handleAfisareButtonClick}>
        Afisare
      </button>

      <textarea
        className="customTextArea"
        placeholder="Detalii aici..."
        value={projectDetails}
        readOnly={isReadOnly}
      />

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};


export default VizProiect;
