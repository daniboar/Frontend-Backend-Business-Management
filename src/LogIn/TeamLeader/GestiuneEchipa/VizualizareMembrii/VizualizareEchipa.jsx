// VizualizareEchipa.jsx

import React, { useState } from 'react';
import './VizualizareEchipa.css'; // Importă fișierul CSS

const VizualizareEchipa = () => {
  const [showText, setShowText] = useState(false);

  const handleShowButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h2 className="echipa-title">Aceasta este echipa ta</h2>
      <button onClick={handleShowButtonClick}>SHOW</button>
      {showText && (
        <div className="container text">Text destul de maricel!</div>
      )}
    </div>
  );
};

export default VizualizareEchipa;
