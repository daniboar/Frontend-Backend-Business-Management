import React, { useState } from 'react';
//Importuri pentru prima pagina
import Welcome from './Welcome/Welcome.jsx';
import LoginForm from './LogIn/Login.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import NewUser from './NewUser/NewUser.jsx';
//import CerereProiect from './LogIn/Client/CerereProiect/CerereProiect.jsx';
//import CV from './CV/CV.jsx';
//Importuri pentru deciderea user-ului
import CEO from './LogIn/CEO/CEO.jsx';
import Angajat from './LogIn/Angajat/Angajat.jsx';
import TeamLeader from './LogIn/TeamLeader/TeamLeader.jsx';
import Client from './LogIn/Client/Client.jsx';
//import GestiuneEchipa from './LogIn/TeamLeader/GestiuneEchipa/GestiuneEchipa.jsx';
//import VizualizareEchipa from './LogIn/TeamLeader/GestiuneEchipa/VizualizareMembrii/VizualizareEchipa.jsx'

//Importuri pentru actiuniile CEO
//import SchimbareSalariu from './LogIn/CEO/SchimbaSalariu/SchimbaSalariu.jsx';
//import VerifProiecte from './LogIn/CEO/VerifProiecte/VerifProiecte.jsx'
//import AlegeTL from './LogIn/CEO/AlegeTeamLeader/AlegeTL.jsx';
//import ManagementCereri from './LogIn/CEO/ManagementProiecte/ManagementProiecte.jsx';
//import VizualizareA from './LogIn/CEO/VizualizareAngajati/VizualizareA.jsx';
//import VizualizareC from './LogIn/CEO/VizualizareClienti/VizualizareC.jsx';
//import VizualizareT from './LogIn/CEO/VizualizareTeamLeaderi/VizualizareT.jsx';
//import Promovari from './LogIn/CEO/Promovari/Promovari.jsx'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showCEO, setShowCEO] = useState(false);
  const [showTeamLeader, setShowTeamLeader] = useState(false);
  const [showAngajat, setShowAngajat] = useState(false);
  const [showClient, setShowClient] = useState(false);

  const handleLoginPageButtonClick = () => {
    setShowLogin(true);
    setShowCEO(false);
    setShowTeamLeader(false);
    setShowAngajat(false);
    setShowClient(false);
    setShowNewUser(false);
    setShowInfo(false);
    
  };

  const handleLoginButtonClick = (userType) => {
    setShowLogin(false);
    // Based on the selected user type, set the corresponding state to true
    if (userType === 'CEO') {
      setShowCEO(true);
    } else if (userType === 'TeamLeader') {
      setShowTeamLeader(true);
    } else if (userType === 'Angajat') {
      setShowAngajat(true);
    } else if (userType === 'Client') {
      setShowClient(true);
    }
    setShowNewUser(false);
    setShowInfo(false);
  };

  const handleNewUserButtonClick = () => {
    setShowLogin(false);
    setShowCEO(false);
    setShowTeamLeader(false);
    setShowAngajat(false);
    setShowClient(false);
    setShowInfo(false);
    setShowNewUser(true);
  };
  
  const handleShowInfoButtonClick = () => {
    setShowLogin(false);
    setShowCEO(false);
    setShowTeamLeader(false);
    setShowAngajat(false);
    setShowClient(false);
    setShowInfo(true);
    setShowNewUser(false);
  };


  const handleBackButtonClick = () => {
    setShowLogin(false);
    setShowCEO(false);
    setShowTeamLeader(false);
    setShowAngajat(false);
    setShowClient(false);
    setShowInfo(false);
    setShowNewUser(false);
  };

  const handleLogoutClick = () => {
    setShowLogin(false);
    setShowCEO(false);
    setShowTeamLeader(false);
    setShowAngajat(false);
    setShowClient(false);
    setShowInfo(false);
    setShowNewUser(false);
  };
  
  return (
    <div className="App">
      {showLogin ? (
        <LoginForm 
        onBackClick={handleBackButtonClick}
        onLoginClick={handleLoginButtonClick} />
      ) : showCEO ? (
        <CEO onLogoutClick={handleLogoutClick} />
      ) : showTeamLeader ? (
        <TeamLeader onLogoutClick={handleLogoutClick} />
      ) : showAngajat ? (
        <Angajat onLogoutClick={handleLogoutClick} />
      ) : showClient ? (
        <Client onLogoutClick={handleLogoutClick} />
      ) : showNewUser ? (
        <NewUser onBackClick={handleBackButtonClick} />
      ) : showInfo ? (
        <AboutUs onBackClick={handleBackButtonClick} />
      ) : (
        <Welcome
          onLoginClick={handleLoginPageButtonClick}
          onAboutUs={handleShowInfoButtonClick}
          onNewUserClick={handleNewUserButtonClick}
        />
      )}
    </div>
  );
}

export default App;