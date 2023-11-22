import React, { useState } from 'react';
import Welcome from './Welcome';
import LoginForm from './LogIn';
import CV from './CV';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowCVModal(false);
  };

  const handleBackClick = () => {
    setShowLogin(false);
    setShowCVModal(false);
  };

  const handleApplyCVClick = () => {
    setShowCVModal(true);
    setShowLogin(false);
  };

  return (
    <div className="App">
      {showLogin ? (
        <LoginForm onBackClick={handleBackClick} />
      ) : showCVModal ? (
        <CV onBackClick={handleBackClick} />
      ) : (
        <Welcome
          onLoginClick={handleLoginClick}
          onApplyCVClick={handleApplyCVClick}
        />
      )}
    </div>
  );
}

export default App;
