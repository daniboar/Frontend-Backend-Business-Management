import React, { useState } from 'react';
import Welcome from './Welcome';
import LoginForm from './LogIn';
import CV from './CV';
import CerereProiect from './CerereProiect';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [showCerereProiect, setShowCerereProiect] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    setShowCVModal(false);
    setShowCerereProiect(false);
  };

  const handleApplyCVButtonClick = () => {
    setShowCVModal(true);
    setShowLogin(false);
    setShowCerereProiect(false);
  };

  const handleApplyProjectButtonClick = () => {
    setShowCerereProiect(true);
    setShowLogin(false);
    setShowCVModal(false);
  };

  const handleBackButtonClick = () => {
    setShowLogin(false);
    setShowCVModal(false);
    setShowCerereProiect(false);
  };

  return (
    <div className="App">
      {showLogin ? (
        <LoginForm onBackClick={handleBackButtonClick} />
      ) : showCVModal ? (
        <CV onBackClick={handleBackButtonClick} />
      ) : showCerereProiect ? (
        <CerereProiect onBackClick={handleBackButtonClick} />
      ) : (
        <Welcome
          onLoginClick={handleLoginButtonClick}
          onApplyCVClick={handleApplyCVButtonClick}
          onApplyProjectClick={handleApplyProjectButtonClick}
        />
      )}
    </div>
  );
}

export default App;
