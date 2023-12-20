import React, { useState } from 'react';
import Welcome from './Welcome/Welcome.jsx';
import LoginForm from './LogIn/Login.jsx';
//import CV from './CV/CV.jsx';
//import CEO from './LogIn/CEO/CEO.jsx';
import CerereProiect from './CerereProiect/CerereProiect.jsx';
//import Angajat from './LogIn/Angajat/Angajat.jsx';
//import TeamLeader from './LogIn/TeamLeader/TeamLeader.jsx';
//import Client from './LogIn/Client/Client.jsx';
//import SefSectie from './LogIn/SefSectie/SefSectie.jsx';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  //const [showCVModal, setShowCVModal] = useState(false);
  const [showCerereProiect, setShowCerereProiect] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    //setShowCVModal(false);
    setShowCerereProiect(false);
  };

  const handleApplyCVButtonClick = () => {
    //setShowCVModal(true);
    setShowLogin(false);
    setShowCerereProiect(false);
  };

  const handleApplyProjectButtonClick = () => {
    setShowCerereProiect(true);
    setShowLogin(false);
    //setShowCVModal(false);
  };

  const handleBackButtonClick = () => {
    setShowLogin(false);
    //setShowCVModal(false);
    setShowCerereProiect(false);
  };

  return (
    <div className="App">
      {showLogin ? (
        <LoginForm onBackClick={handleBackButtonClick} />
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
