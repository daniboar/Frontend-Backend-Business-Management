// VizualizareEchipa.jsx

import React, { useState } from 'react';
import './VizualizareEchipa.css'; // Importă fișierul CSS

const VizualizareEchipa = ({onBackClick}) => {
  const [showText, setShowText] = useState(false);

  const handleShowButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h2 className="echipa-title">Aceasta este echipa pe care o conduci</h2>
      <button onClick={handleShowButtonClick}>SHOW</button>
      {showText && (
        <div className="container text">Text destul de maricel!</div>
      )}

      <button onClick={onBackClick}>Back</button>
      
    </div>
  );
};

export default VizualizareEchipa;
