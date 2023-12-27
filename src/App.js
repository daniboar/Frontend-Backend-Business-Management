import React, { useState } from 'react';
import Welcome from './Welcome/Welcome.jsx';
//import LoginForm from './LogIn/Login.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import NewUser from './NewUser/NewUser.jsx';
import ManagementCereri from './LogIn/CEO/ManagementProiecte/ManagementProiecte.jsx';
//import CerereProiect from './LogIn/Client/CerereProiect/CerereProiect.jsx';
//import CV from './CV/CV.jsx';
//import CEO from './LogIn/CEO/CEO.jsx';
//import Angajat from './LogIn/Angajat/Angajat.jsx';
//import TeamLeader from './LogIn/TeamLeader/TeamLeader.jsx';
//import Client from './LogIn/Client/Client.jsx';
//import GestiuneEchipa from './LogIn/TeamLeader/GestiuneEchipa/GestiuneEchipa.jsx';
//import VizualizareEchipa from './LogIn/TeamLeader/GestiuneEchipa/VizualizareMembrii/VizualizareEchipa.jsx'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  //const [showCVModal, setShowCVModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showCerereProiect, setShowCerereProiect] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    //setShowCVModal(false);
    setShowInfo(false);
    setShowCerereProiect(false);
  };

  const handleShowInfoButtonClick = () => {
    //setShowCVModal(true);
    setShowInfo(true);
    setShowLogin(false);
    setShowCerereProiect(false);
  };

  const handleApplyProjectButtonClick = () => {
    setShowCerereProiect(true);
    setShowLogin(false);
    setShowInfo(false);
    //setShowCVModal(false);
  };

  const handleBackButtonClick = () => {
    setShowLogin(false);
    setShowInfo(false);
    //setShowCVModal(false);
    setShowCerereProiect(false);
  };
  
  return (
    <div className="App">
      {showLogin ? (
        <ManagementCereri onBackClick={handleBackButtonClick} />
      ) : showCerereProiect ? (
        <NewUser onBackClick={handleBackButtonClick} />
      ) : showInfo ? (
        <AboutUs onBackClick={handleBackButtonClick} />
      ) : (
        <Welcome
          onLoginClick={handleLoginButtonClick}
          onAboutUs={handleShowInfoButtonClick}
          onApplyProjectClick={handleApplyProjectButtonClick}
        />
      )}
    </div>
  );
}

export default App;
