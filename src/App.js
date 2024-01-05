import React, { useState } from 'react';
//import CerereProiect from './LogIn/Client/CerereProiect/CerereProiect.jsx';
//import CV from './CV/CV.jsx';
//Importuri pentru prima pagina
//---------------------------------------------------------
import Welcome from './Welcome/Welcome.jsx';
import LoginForm from './LogIn/Login.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import NewUser from './NewUser/NewUser.jsx';

//Importuri pentru deciderea user-ului
//---------------------------------------------------------
import CEO from './LogIn/CEO/CEO.jsx';
import Angajat from './LogIn/Angajat/Angajat.jsx';
import TeamLeader from './LogIn/TeamLeader/TeamLeader.jsx';
import Client from './LogIn/Client/Client.jsx';

//Importuri pentru actiuniile CEO
//-------------------------------------------------------------
import SchimbareSalariu from './LogIn/CEO/SchimbaSalariu/SchimbaSalariu.jsx';
import VerifProiecte from './LogIn/CEO/VerifProiecte/VerifProiecte.jsx'
import AlegeTL from './LogIn/CEO/AlegeTeamLeader/AlegeTL.jsx';
import ManagementCereri from './LogIn/CEO/ManagementProiecte/ManagementProiecte.jsx';
import VizualizareA from './LogIn/CEO/Vizualizari/VizualizareAngajati/VizualizareA.jsx';
import VizualizareC from './LogIn/CEO/Vizualizari/VizualizareClienti/VizualizareC.jsx';
import VizualizareT from './LogIn/CEO/Vizualizari/VizualizareTeamLeaderi/VizualizareT.jsx';
import Promovari from './LogIn/CEO/Promovari/Promovari.jsx'
import CreareAngajat from './LogIn/CEO/Creari/CreareAngajat/CreareAngajat.jsx';
import Vizualizari from './LogIn/CEO/Vizualizari/Vizualizari.jsx';
import Stergeri from './LogIn/CEO/Stergeri/Stergeri.jsx';
import StergereAngajat from './LogIn/CEO/Stergeri/StergereAngajat/StergereAngajat.jsx'
import StergereTeamLeader from './LogIn/CEO/Stergeri/StergereTeamLeader/StergereTeamLeader.jsx';
import StergereTeamLeaderEchipa from './LogIn/CEO/Stergeri/StergereTeamLeaderEchipa/StergereTeamLeaderEchipa.jsx';
import StergereEchipa from './LogIn/CEO/Stergeri/StergereEchipa/StergereEchipa.jsx';
import VizualizareEchipe from './LogIn/CEO/Vizualizari/VizualizareEchipe/VizualizareEchipe.jsx';
import Creari from './LogIn/CEO/Creari/Creari.jsx';
import CreareEchipa from './LogIn/CEO/Creari/CreareEchipa/CreareEchipa.jsx';

//Importuri pentru Client
//----------------------------------------------------------------
import DatePersonale from './LogIn/Client/DatePersonale/DatePersonale.jsx';
import VerificareProiecte from './LogIn/Client/VerifProiecte/VerificareProiecte.jsx';
import CerereProiect from './LogIn/Client/CerereProiect/CerereProiect.jsx';
import CreareProiectForm from './LogIn/Client/CreareProiect/CreareProiect.jsx';
//cerereProiect

//Importuri pentru Angajat
//-----------------------------------------------------------------
import DatePersonaleA from './LogIn/Angajat/DatePersonaleA/DatePersonaleA.jsx';
import Procentaj from './LogIn/Angajat/Procentaj/Procentaj.jsx';
import VizProiect from './LogIn/Angajat/VizProiect/VizProiect.jsx';
import CerereMarire from './LogIn/Angajat/CerereMarire/CerereMarire.jsx';

//Importuri pentru TeamLeader
//----------------------------------------------------------------
import DatePersonaleT from './LogIn/TeamLeader/DatePersonaleT/DatePersonaleT.jsx';
import GestiuneEchipa from './LogIn/TeamLeader/GestiuneEchipa/GestiuneEchipa.jsx';
import AdaugareMembru from './LogIn/TeamLeader/GestiuneEchipa/AdaugaMembru/AdaugareMembru.jsx';
import StergereMembru from './LogIn/TeamLeader/GestiuneEchipa/StergereMembru/StergereMembru.jsx';
import VizualizareEchipa from './LogIn/TeamLeader/GestiuneEchipa/VizualizareMembrii/VizualizareEchipa.jsx';
import ProcentajTotal from './LogIn/TeamLeader/Procentaje/ProcentajTotal.jsx';
import VizualizareDetaliiProiect from './LogIn/TeamLeader/VizualizareProiect/VizualizareProiect.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showCEO, setShowCEO] = useState(false);
  const [showTeamLeader, setShowTeamLeader] = useState(false);
  const [showAngajat, setShowAngajat] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const [showVizualizareCerereProiect, setVizualizareCerereProiect] = useState(false);
  const [showManageriazaProiectele, setManageriazaProiectele] = useState(false);
  const [showPromovari, setShowPromovari] = useState(false);
  const [showModificareSalariu, setModificareSalariu] = useState(false);
  const [showAsignareTeamLeader, setAsignareTeamLeader] = useState(false);
  const [showVizualizareAngajat, setVizualizareAngajat] = useState(false);
  const [showVizualizareTeamLeader, setVizualizareTeamLeader] = useState(false);
  const [showVizualizareClienti, setVizualizareClienti] = useState(false);
  const [showGestiuneEchipa, setGestiuneEchipa] = useState(false);
  const [showVizualizareDetaliiProiect, setVizualizareDetaliiProiect] = useState(false);
  const [showVizualizareDatePersonale, setVizualizareDatePersonale] = useState(false);
  const [showAdaugareMembru, setAdaugareMembru] = useState(false);
  const [showStergereMembru, setStergereMembru] = useState(false);
  const [showVizualizareEchipa, setVizualizareEchipa] = useState(false);
  const [showProcentajTotal, setProcentajTotal] = useState(false);
  const [showDatePersonaleA, setDatePersonaleA] = useState(false);
  const [showProcentaj, setProcentaj] = useState(false);
  const [showVizProiect, setVizProiect] = useState(false);
  const [showDatePersonale, setDatePersonale] = useState(false);
  const [showVerificareProiecte, setVerificareProiecte] = useState(false);
  const [showCerereMarire,setCerereMarire] = useState(false);
  const [showCerereProiect, setCerereProiect] = useState(false);
  const [showCreareProiectForm,setCreareProiectForm] = useState(false);
  const [showCreareAngajat, setCreareAngajat] = useState(false);
  const [showVizualizari,setVizualizari] = useState(false);
  const [showStergeri,setStergeri] = useState(false);
  const [showStergereAngajat,setStergereAngajat] = useState(false);
  const [showStergereTeamLeader, setStergereTeamLeader] = useState(false);
  const [showStergereEchipa,setStergereEchipa] = useState(false);
  const [showStergereTeamLeaderEchipa, setStergereTeamLeaderEchipa] = useState(false);
  const [showVizualizareEchipe,setVizualizareEchipe] = useState(false);
  const [showCreari,setCreari] = useState(false);
  const [showCreareEchipa,setCreareEchipa] = useState(false);


  const handleLoginPageButtonClick = () => {
    setShowLogin(true);
    //CEO
    setShowCEO(false);
    setVizualizareCerereProiect(false);
    setManageriazaProiectele(false);
    setShowPromovari(false);
    setModificareSalariu(false);
    setAsignareTeamLeader(false);
    setVizualizareAngajat(false);
    setVizualizareTeamLeader(false);
    setVizualizareClienti(false);
    setCreareAngajat(false);
    setVizualizari(false);
    setStergeri(false);
    setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
    //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    setCerereMarire(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    setCerereProiect(false);
    setCreareProiectForm(false);
    //
    setShowTeamLeader(false);
    setShowAngajat(false);
    setShowClient(false);
    setShowNewUser(false);
    setShowInfo(false);
    
  };

  const CEO_LOGIN_ENDPOINT = 'http://localhost:8080/ceos/login';
  const TEAM_LEADER_LOGIN_ENDPOINT = 'http://localhost:8080/team-leaders/login';
  const ANGAJAT_LOGIN_ENDPOINT = 'http://localhost:8080/angajati/login';
  const CLIENT_LOGIN_ENDPOINT = 'http://localhost:8080/clienti/login';

  const handleLoginButtonClick = async (userType, email, password) => {
  try {
    let loginEndpoint = '';

    // Set the endpoint based on the user type
    switch (userType) {
      case 'CEO':
        loginEndpoint = CEO_LOGIN_ENDPOINT;
        break;
      case 'TeamLeader':
        loginEndpoint = TEAM_LEADER_LOGIN_ENDPOINT;
        break;
      case 'Angajat':
        loginEndpoint = ANGAJAT_LOGIN_ENDPOINT;
        break;
      case 'Client':
        loginEndpoint = CLIENT_LOGIN_ENDPOINT;
        break;
      default:
        break;
    }
    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    });

    const loginResult = await response.json();
      if(loginResult === true){
        setShowLogin(false);
      // Login successful
      if (userType === 'CEO') {
        setShowCEO(true);
      } else if (userType === 'TeamLeader') {
        setShowTeamLeader(true);
      } else if (userType === 'Angajat') {
        setShowAngajat(true);
      } else if (userType === 'Client') {
        setShowClient(true);
      }
    } else {
      // Invalid credentials
      alert('Invalid email or password.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('Error during login.');
  }
    setShowNewUser(false);
    setShowInfo(false);
     //CEO
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    setCerereMarire(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    setCerereProiect(false);
    setCreareProiectForm(false);
    //
  };

  const handleNewUserButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    setCerereMarire(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    setCerereProiect(false);
    setCreareProiectForm(false);
    //
     setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(false);
     setShowInfo(false);
     setShowNewUser(true);
  };
  
  const handleShowInfoButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    setCerereMarire(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    setCerereProiect(false);
    setCreareProiectForm(false);
     //
     setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(false);
     setShowInfo(true);
     setShowNewUser(false);
  };

////////////////////////////////////////////////////////////////////////////////////////////
//Actiuni CEO
const handleVizualizareCerereProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(true);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleManageriazaProiecteleClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(true);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
}

const handlePromovariClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(true);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleModificareSalariuClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(true);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleAsignareTeamLeaderClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(true);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareAngajatClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(true);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareTeamLeaderClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(true);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareClientiClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(true);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleCreareAngajatClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(true);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleVizualizariClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(true);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleStergeriClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(true);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleStergereAngajatClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(true);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleStergereEchipaClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(true);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleStergereTeamLeaderClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(true);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleStergereTeamLeaderEchipaClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(true);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleVizualizareEchipeClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(true);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleCreariClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(true);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleCreareEchipaClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(true);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
////////////////////////////////////////////////////////////////////////////////////////////
//Actiuni TeamLeader
const handleGestiuneEchipaClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(true);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};


const handleVizualizareDetaliiProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(true);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareDatePersonaleClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
   setGestiuneEchipa(false);
  
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(true);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   setCerereMarire(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   setCerereProiect(false);
   setCreareProiectForm(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleAdaugareMembruClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(true);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleStergereMembruClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajTotal(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(true);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareEchipaClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(true);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleModificareProcentajTotal = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(true);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
////////////////////////////////////////////////////////////////////////////////////////////
//Actiuni Angajat
const handleVizualizareDatePersonaleAClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(true);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleProcentajProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(true);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(true);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
////////////////////////////////////////////////////////////////////////////////////////////
//Actiuni Client
const handleVerificareProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(true);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleVizualizareDatePersonaleCClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(true);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleCerereProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(true);
  setCreareProiectForm(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

const handleCreareProiectClick = () => {
  setShowLogin(false);
   //CEO
   setShowCEO(false);
   setVizualizareCerereProiect(false);
   setManageriazaProiectele(false);
   setShowPromovari(false);
   setModificareSalariu(false);
   setAsignareTeamLeader(false);
   setVizualizareAngajat(false);
   setVizualizareTeamLeader(false);
   setVizualizareClienti(false);
   setCreareAngajat(false);
   setVizualizari(false);
   setStergeri(false);
   setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
   //TL
  setGestiuneEchipa(false);
 
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  setCerereMarire(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  setCerereProiect(false);
  setCreareProiectForm(true);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};

////////////////////////////////////////////////////////////////////////////////////////////
  const handleBackButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    setCerereMarire(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    setCerereProiect(false);
    setCreareProiectForm(false);
    //
     setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(false);
     setShowInfo(false);
     setShowNewUser(false);
  };

  const handleCEOBackButtonClick = () => {
    
     setShowCEO(true);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    setCerereMarire(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    setCerereProiect(false);
    setCreareProiectForm(false);
    //     
    setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(false);
     setShowInfo(false);
     setShowNewUser(false);
  };

  const handleTLBackButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
     //Angajat
     setDatePersonaleA(false);
     setProcentaj(false);
     setVizProiect(false);
     setCerereMarire(false);
     //Client
     setDatePersonale(false);
     setVerificareProiecte(false);
     setCerereProiect(false);
     setCreareProiectForm(false);
     //
     setShowTeamLeader(true);
     setShowAngajat(false);
     setShowClient(false);
     setShowInfo(false);
     setShowNewUser(false);
  };
  const handleTLGestiuneBackButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(true);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
     //Angajat
     setDatePersonaleA(false);
     setProcentaj(false);
     setVizProiect(false);
     setCerereMarire(false);
     //Client
     setDatePersonale(false);
     setVerificareProiecte(false);
     setCerereProiect(false);
     setCreareProiectForm(false);
     //
     setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(false);
     setShowInfo(false);
     setShowNewUser(false);
  };
  const handleAngajatBackButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
     //Angajat
     setDatePersonaleA(false);
     setProcentaj(false);
     setVizProiect(false);
     setCerereMarire(false);
     //Client
     setDatePersonale(false);
     setVerificareProiecte(false);
     setCerereProiect(false);
     setCreareProiectForm(false);
     //
     setShowTeamLeader(false);
     setShowAngajat(true);
     setShowClient(false);
     setShowInfo(false);
     setShowNewUser(false);
  };
  const handleClientBackButtonClick = () => {
    setShowLogin(false);
     //CEO
     setShowCEO(false);
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     setCreareAngajat(false);
     setVizualizari(false);
     setStergeri(false);
     setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
     //TL
    setGestiuneEchipa(false);
   
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajTotal(false);
     //Angajat
     setDatePersonaleA(false);
     setProcentaj(false);
     setVizProiect(false);
     setCerereMarire(false);
     //Client
     setDatePersonale(false);
     setVerificareProiecte(false);
     setCerereProiect(false);
     setCreareProiectForm(false);
     //
     setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(true);
     setShowInfo(false);
     setShowNewUser(false);
  };

  const handleLogoutClick = () => {
      setShowLogin(true);
       //CEO
       setShowCEO(false);
       setVizualizareCerereProiect(false);
       setManageriazaProiectele(false);
       setShowPromovari(false);
       setModificareSalariu(false);
       setAsignareTeamLeader(false);
       setVizualizareAngajat(false);
       setVizualizareTeamLeader(false);
       setVizualizareClienti(false);
       setCreareAngajat(false);
       setVizualizari(false);
       setStergeri(false);
       setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
       //TL
      setGestiuneEchipa(false);
     
      setVizualizareDetaliiProiect(false);
      setVizualizareDatePersonale(false);
      setAdaugareMembru(false);
      setStergereMembru(false);
      setVizualizareEchipa(false);
      setProcentajTotal(false);
       //Angajat
       setDatePersonaleA(false);
       setProcentaj(false);
       setVizProiect(false);
       setCerereMarire(false);
       //Client
       setDatePersonale(false);
       setVerificareProiecte(false);
       setCerereProiect(false);
       setCreareProiectForm(false);
       //
       setShowTeamLeader(false);
       setShowAngajat(false);
       setShowClient(false);
       setShowInfo(false);
       setShowNewUser(false);
    };

    const handleAngajatCerereMarireBackButtonClick = () => {
      setShowLogin(false);
       //CEO
       setShowCEO(false);
       setVizualizareCerereProiect(false);
       setManageriazaProiectele(false);
       setShowPromovari(false);
       setModificareSalariu(false);
       setAsignareTeamLeader(false);
       setVizualizareAngajat(false);
       setVizualizareTeamLeader(false);
       setVizualizareClienti(false);
       setCreareAngajat(false);
       setVizualizari(false);
       setStergeri(false);
       setStergereAngajat(false);
    setStergereEchipa(false);
    setStergereTeamLeaderEchipa(false);
    setStergereTeamLeader(false);
    setVizualizareEchipe(false);
    setCreari(false);
    setCreareEchipa(false);
       //TL
      setGestiuneEchipa(false);
     
      setVizualizareDetaliiProiect(false);
      setVizualizareDatePersonale(false);
      setAdaugareMembru(false);
      setStergereMembru(false);
      setVizualizareEchipa(false);
      setProcentajTotal(false);
       //Angajat
       setDatePersonaleA(false);
       setProcentaj(false);
       setVizProiect(false);
       setCerereMarire(true);
       //Client
       setDatePersonale(false);
       setVerificareProiecte(false);
       setCerereProiect(false);
       setCreareProiectForm(false);
       //
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
//////////////////////////////////////////////////////////////////////////////////
//CEO
      ) : showCEO ? (
        <CEO
          onCreari = {handleCreariClick}
          onStergeri = {handleStergeriClick}
          onVizualizari={handleVizualizariClick}
          onVizualizareCerereProiect={handleManageriazaProiecteleClick}
          onManageriazaProiectele={handleVizualizareCerereProiectClick}
          onPromovari={handlePromovariClick}
          onModificareSalariu={handleModificareSalariuClick}
          onAsignareTeamLeader={handleAsignareTeamLeaderClick}
          onLogoutClick={handleLogoutClick} 
          onCreareAngajat={handleCreareAngajatClick}/>
      ) : showPromovari ? (
        <Promovari
           onBackClick={handleCEOBackButtonClick}
        />
      ) : showModificareSalariu ? (
        <SchimbareSalariu 
           onBackClick={handleCEOBackButtonClick}
            />
      ) : showAsignareTeamLeader ? (
        <AlegeTL
          onBackClick={handleCEOBackButtonClick}
         />
      ) : showVizualizareCerereProiect ? (
        <VerifProiecte
          onBackClick={handleCEOBackButtonClick}
        />
      ) : showManageriazaProiectele ? (
        <ManagementCereri
        onBackClick={handleCEOBackButtonClick}
      />
      ) : showCreari ? (
        <Creari
          onCreareAngajat={handleCreareAngajatClick}
          onCreareEchipa={handleCreareEchipaClick}
          onBackClick={handleCEOBackButtonClick}
          />
      ) : showCreareAngajat ? (
        <CreareAngajat
          onBackClick={handleCreariClick}
        />
      ) : showCreareEchipa ? (
        <CreareEchipa
          onBackClick={handleCreariClick}
        />
          ) : showStergeri ? (
            <Stergeri
            onStergereAngajat={handleStergereAngajatClick}
            onStergereEchipa={handleStergereEchipaClick}
            onStergereTeamLeader={handleStergereTeamLeaderClick}
            onStergereTeamLeaderEchipa={handleStergereTeamLeaderEchipaClick}
              onBackClick={handleCEOBackButtonClick}
            />
          ) : showStergereAngajat ? (
            <StergereAngajat
              onBackClick={handleStergeriClick}
            />
          ) : showStergereEchipa ? (
            <StergereEchipa
              onBackClick={handleStergeriClick}
            />
          ) : showStergereTeamLeader ? (
            <StergereTeamLeader
              onBackClick={handleStergeriClick}
            />
          ) : showStergereTeamLeaderEchipa ? (
            <StergereTeamLeaderEchipa
              onBackClick={handleStergeriClick}
              />
      ) : showVizualizari ? (

        <Vizualizari
            onVizualizareAngajat={handleVizualizareAngajatClick}
            onVizualizareTeamLeader={handleVizualizareTeamLeaderClick}
            onVizualizareClienti={handleVizualizareClientiClick}
            onVizualizareEchipe={handleVizualizareEchipeClick}
            onBackClick={handleCEOBackButtonClick}
        />
        
        ) : showVizualizareTeamLeader ? (
          <VizualizareT
            onBackClick={handleVizualizariClick}
          />
        ) : showVizualizareAngajat ? (
          <VizualizareA
            onBackClick={handleVizualizariClick}
          />
        ) : showVizualizareClienti ? (
          <VizualizareC
            onBackClick={handleVizualizariClick}
          />
        ) : showVizualizareEchipe ? (
          <VizualizareEchipe 
            onBackClick={handleVizualizariClick}
          />
//////////////////////////////////////////////////////////////////////////////////
//TeamLeader
      ): showTeamLeader ? (
        <TeamLeader 
          onGestiuneEchipa={handleGestiuneEchipaClick}
          onProcentajeProiect={handleModificareProcentajTotal}
          onVizualizareDetaliiProiect={handleVizualizareDetaliiProiectClick}
          onVizualizareDatePersonale={handleVizualizareDatePersonaleClick}
          onLogoutClick={handleLogoutClick} />
          ) : showGestiuneEchipa ? (
            <GestiuneEchipa
              onAdaugareMembru={handleAdaugareMembruClick}
              onStergereMembru={handleStergereMembruClick}
              onVizualizareEchipa={handleVizualizareEchipaClick}
              onBackClick={handleTLBackButtonClick}
            />
            ) : showAdaugareMembru ? (
              <AdaugareMembru
              onBackClick={handleGestiuneEchipaClick}
            />
            ) : showStergereMembru ? (
              <StergereMembru
                onBackClick={handleTLGestiuneBackButtonClick}
              />
            ) : showVizualizareEchipa ? (
              <VizualizareEchipa
                onBackClick={handleTLGestiuneBackButtonClick}
              />
            ) : showProcentajTotal ? (
              <ProcentajTotal
                onBackClick={handleTLBackButtonClick}
              />
            ) : showVizualizareDetaliiProiect ? (
            <VizualizareDetaliiProiect
              onBackClick={handleTLBackButtonClick}
            />
            ) : showVizualizareDatePersonale ? (
            <DatePersonaleT
              onBackClick={handleTLBackButtonClick}
            />
//////////////////////////////////////////////////////////////////////////////////
//Angajat
      ) : showAngajat ? (
        <Angajat 
          onProcentajProiect={handleProcentajProiectClick}
          onVizualizareProiect={handleVizualizareProiectClick}
          onVizualizareDatePersonale={handleVizualizareDatePersonaleAClick}
          onCerereMarire={handleAngajatCerereMarireBackButtonClick}
          onLogoutClick={handleLogoutClick}
        />
        ) : showDatePersonaleA ? (
          <DatePersonaleA
            onBackClick={handleAngajatBackButtonClick}
          />
        ) : showProcentaj ? (
          <Procentaj
            onBackClick={handleAngajatBackButtonClick}
          />
          ) : showVizProiect ? (
            <VizProiect
              onBackClick={handleAngajatBackButtonClick}
            />
          ) : showCerereMarire ? (
            <CerereMarire
              onBackClick={handleAngajatBackButtonClick}
            />
       
//////////////////////////////////////////////////////////////////////////////////
//Client
      ) : showClient ? (
        <Client 
          onVerificareProiect={handleVerificareProiectClick}
          onCerereProiect={handleCerereProiectClick}
          onCreareProiect={handleCreareProiectClick}
          onVizualizareDatePersonale={handleVizualizareDatePersonaleCClick}
          onLogoutClick={handleLogoutClick} />
          ) : showDatePersonale ? (
            <DatePersonale
              onBackClick={handleClientBackButtonClick}
            />
            ) : showVerificareProiecte ? (
              <VerificareProiecte
                onBackClick={handleClientBackButtonClick}
              />
            ) : showCerereProiect ? (
              <CerereProiect
                onBackClick={handleClientBackButtonClick}
              />
            ) : showCreareProiectForm ? (
              <CreareProiectForm
                onBackClick={handleClientBackButtonClick}
                />
//////////////////////////////////////////////////////////////////////////////////
//WelcomePage
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