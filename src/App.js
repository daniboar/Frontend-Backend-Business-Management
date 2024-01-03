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
import VizualizareA from './LogIn/CEO/VizualizareAngajati/VizualizareA.jsx';
import VizualizareC from './LogIn/CEO/VizualizareClienti/VizualizareC.jsx';
import VizualizareT from './LogIn/CEO/VizualizareTeamLeaderi/VizualizareT.jsx';
import Promovari from './LogIn/CEO/Promovari/Promovari.jsx'

//Importuri pentru Client
//----------------------------------------------------------------
import DatePersonale from './LogIn/Client/DatePersonale/DatePersonale.jsx';
import VerificareProiecte from './LogIn/Client/VerifProiecte/VerificareProiecte.jsx';


//Importuri pentru Angajat
//-----------------------------------------------------------------
import DatePersonaleA from './LogIn/Angajat/DatePersonaleA/DatePersonaleA.jsx';
import Procentaj from './LogIn/Angajat/Procentaj/Procentaj.jsx';
import VizProiect from './LogIn/Angajat/VizProiect/VizProiect.jsx';

//Importuri pentru TeamLeader
//----------------------------------------------------------------
import DatePersonaleT from './LogIn/TeamLeader/DatePersonaleT/DatePersonaleT.jsx';
import GestiuneEchipa from './LogIn/TeamLeader/GestiuneEchipa/GestiuneEchipa.jsx';
import AdaugareMembru from './LogIn/TeamLeader/GestiuneEchipa/AdaugaMembru/AdaugareMembru.jsx';
import StergereMembru from './LogIn/TeamLeader/GestiuneEchipa/StergereMembru/StergereMembru.jsx';
import VizualizareEchipa from './LogIn/TeamLeader/GestiuneEchipa/VizualizareMembrii/VizualizareEchipa.jsx';
import Procentaje from './LogIn/TeamLeader/Procentaje/Procentaje.jsx';
import ProcentajPropriu from './LogIn/TeamLeader/Procentaje/ProcentajPropriu/ProcentajPropriu.jsx';
import ProcentajTotal from './LogIn/TeamLeader/Procentaje/ProcentajTotal/ProcentajTotal.jsx';

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
  const [showPropunereMarire, setPropunereMarire] = useState(false);
  const [showProcentajeProiect, setProcentajeProiect] = useState(false);
  const [showVizualizareDetaliiProiect, setVizualizareDetaliiProiect] = useState(false);
  const [showVizualizareDatePersonale, setVizualizareDatePersonale] = useState(false);
  const [showAdaugareMembru, setAdaugareMembru] = useState(false);
  const [showStergereMembru, setStergereMembru] = useState(false);
  const [showVizualizareEchipa, setVizualizareEchipa] = useState(false);
  const [showProcentajPropriu, setProcentajPropriu] = useState(false);
  const [showProcentajTotal, setProcentajTotal] = useState(false);
  const [showDatePersonaleA, setDatePersonaleA] = useState(false);
  const [showProcentaj, setProcentaj] = useState(false);
  const [showVizProiect, setVizProiect] = useState(false);
  const [showDatePersonale, setDatePersonale] = useState(false);
  const [showVerificareProiecte, setVerificareProiecte] = useState(false);


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
    //TL
    setGestiuneEchipa(false);
    setPropunereMarire(false);
    setProcentajeProiect(false);
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajPropriu(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
    //
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
     //CEO
     setVizualizareCerereProiect(false);
     setManageriazaProiectele(false);
     setShowPromovari(false);
     setModificareSalariu(false);
     setAsignareTeamLeader(false);
     setVizualizareAngajat(false);
     setVizualizareTeamLeader(false);
     setVizualizareClienti(false);
     //TL
    setGestiuneEchipa(false);
    setPropunereMarire(false);
    setProcentajeProiect(false);
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajPropriu(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
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
     //TL
    setGestiuneEchipa(false);
    setPropunereMarire(false);
    setProcentajeProiect(false);
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajPropriu(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
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
     //TL
    setGestiuneEchipa(false);
    setPropunereMarire(false);
    setProcentajeProiect(false);
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajPropriu(false);
    setProcentajTotal(false);
    //Angajat
    setDatePersonaleA(false);
    setProcentaj(false);
    setVizProiect(false);
    //Client
    setDatePersonale(false);
    setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
   
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(true);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handlePropunereMarireClick = () => {
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(true);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
   //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleProcentajeProiectClick = () => {
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(true);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(true);
   setVizualizareDatePersonale(false);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
   setGestiuneEchipa(false);
   setPropunereMarire(false);
   setProcentajeProiect(false);
   setVizualizareDetaliiProiect(false);
   setVizualizareDatePersonale(true);
   setAdaugareMembru(false);
   setStergereMembru(false);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //Angajat
   setDatePersonaleA(false);
   setProcentaj(false);
   setVizProiect(false);
   //Client
   setDatePersonale(false);
   setVerificareProiecte(false);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(true);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   setStergereMembru(true);
   setVizualizareEchipa(false);
   setProcentajPropriu(false);
   setProcentajTotal(false);
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(true);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(true);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
const handleModificareProcentajPropriu = () => {
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
   
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(true);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(true);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
  //
   setShowTeamLeader(false);
   setShowAngajat(false);
   setShowClient(false);
   setShowInfo(false);
   setShowNewUser(false);
};
////////////////////////////////////////////////////////////////////////////////////////////
//Actiuni Angajat
const handleCerereMarireClick = () => {
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(true);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(true);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(true);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(false);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(false);
  setVerificareProiecte(true);
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
   //TL
  setGestiuneEchipa(false);
  setPropunereMarire(false);
  setProcentajeProiect(false);
  setVizualizareDetaliiProiect(false);
  setVizualizareDatePersonale(false);
  setAdaugareMembru(false);
  setStergereMembru(false);
  setVizualizareEchipa(false);
  setProcentajPropriu(false);
  setProcentajTotal(false);
  //Angajat
  setDatePersonaleA(false);
  setProcentaj(false);
  setVizProiect(false);
  //Client
  setDatePersonale(true);
  setVerificareProiecte(false);
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
     //TL
    setGestiuneEchipa(false);
    setPropunereMarire(false);
    setProcentajeProiect(false);
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajPropriu(false);
    setProcentajTotal(false);
    //
     setShowTeamLeader(false);
     setShowAngajat(false);
     setShowClient(false);
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
     //TL
    setGestiuneEchipa(false);
    setPropunereMarire(false);
    setProcentajeProiect(false);
    setVizualizareDetaliiProiect(false);
    setVizualizareDatePersonale(false);
    setAdaugareMembru(false);
    setStergereMembru(false);
    setVizualizareEchipa(false);
    setProcentajPropriu(false);
    setProcentajTotal(false);
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
          onVizualizareCerereProiect={handleVizualizareCerereProiectClick}
          onManageriazaProiectele={handleManageriazaProiecteleClick}
          onPromovari={handlePromovariClick}
          onModificareSalariu={handleModificareSalariuClick}
          onAsignareTeamLeader={handleAsignareTeamLeaderClick}
          onVizualizareAngajat={handleVizualizareAngajatClick}
          onVizualizareTeamLeader={handleVizualizareTeamLeaderClick}
          onVizualizareClienti={handleVizualizareClientiClick}
          onLogoutClick={handleLogoutClick} />
      ) : showPromovari ? (
        <Promovari
           onBackClick={handleBackButtonClick}
        />
      ) : showModificareSalariu ? (
        <SchimbareSalariu 
           onBackClick={handleBackButtonClick}
            />
      ) : showAsignareTeamLeader ? (
        <AlegeTL
          onBackClick={handleBackButtonClick}
         />
      ) : showVizualizareCerereProiect ? (
        <VerifProiecte
          onBackClick={handleBackButtonClick}
        />
      ) : showManageriazaProiectele ? (
        <ManagementCereri
        onBackClick={handleBackButtonClick}
      />
      ) : showVizualizareTeamLeader ? (
        <VizualizareT
          onBackClick={handleBackButtonClick}
        />
      ) : showVizualizareAngajat ? (
        <VizualizareA
          onBackClick={handleBackButtonClick}
        />
      ) : showVizualizareClienti ? (
        <VizualizareC
          onBackClick={handleBackButtonClick}
        />
//////////////////////////////////////////////////////////////////////////////////
//TeamLeader
      ): showTeamLeader ? (
        <TeamLeader 
          onGestiuneEchipa={handleGestiuneEchipaClick}
          onPropunereMarire={handlePropunereMarireClick}
          onProcentajeProiect={handleProcentajeProiectClick}
          onVizualizareDetaliiProiect={handleVizualizareDetaliiProiectClick}
          onVizualizareDatePersonale={handleVizualizareDatePersonaleClick}
          onLogoutClick={handleLogoutClick} />
          ) : showGestiuneEchipa ? (
            <GestiuneEchipa
              onAdaugareMembru={handleAdaugareMembruClick}
              onStergereMembru={handleStergereMembruClick}
              onVizualizareEchipa={handleVizualizareEchipaClick}
              onBackClick={handleBackButtonClick}
            />
            ) : showAdaugareMembru ? (
              <AdaugareMembru
              onBackClick={handleBackButtonClick}
            />
            ) : showStergereMembru ? (
              <StergereMembru
                onBackClick={handleBackButtonClick}
              />
            ) : showVizualizareEchipa ? (
              <VizualizareEchipa
                onVizualizareEchipa={handleBackButtonClick}
              />
          ) : showPropunereMarire ? (
            //TODO
            <ManagementCereri
            onBackClick={handleBackButtonClick}
          />
          ) : showProcentajeProiect ? (
            <Procentaje
              onModificareProcentajPropriu={handleModificareProcentajPropriu}
              onModificareProcentajTotal={handleModificareProcentajTotal}
              onBackClick={handleBackButtonClick}
            />
            ) : showProcentajPropriu ? (
              <ProcentajPropriu
                onBackClick={handleBackButtonClick}
              />
            ) : showProcentajTotal ? (
              <ProcentajTotal
                onBackClick={handleBackButtonClick}
              />
          ) : showVizualizareDetaliiProiect ? (
            //TODO
            <VizualizareA
              onBackClick={handleBackButtonClick}
            />
          ) : showVizualizareDatePersonale ? (
            <DatePersonaleT
              onBackClick={handleBackButtonClick}
            />
//////////////////////////////////////////////////////////////////////////////////
//Angajat
      ) : showAngajat ? (
        <Angajat 
          onCerereMarire={handleCerereMarireClick}
          onProcentajProiect={handleProcentajProiectClick}
          onVizualizareProiect={handleVizualizareProiectClick}
          onVizualizareDatePersonale={handleVizualizareDatePersonaleClick}
          onLogoutClick={handleLogoutClick}
        />
        ) : showDatePersonaleA ? (
          <DatePersonaleA
            onBackClick={handleBackButtonClick}
          />
        ) : showProcentaj ? (
          <Procentaj
            onBackClick={handleBackButtonClick}
          />
          ) : showVizProiect ? (
            <VizProiect
              onBackClick={handleBackButtonClick}
            />
       
//////////////////////////////////////////////////////////////////////////////////
//Client
      ) : showClient ? (
        <Client 
          onVerificareProiect={handleVerificareProiectClick}
          onCerereProiect={handleCerereProiectClick}
          onVizualizareDatePersonale={handleVizualizareDatePersonaleClick}
          onLogoutClick={handleLogoutClick} />
          ) : showDatePersonale ? (
            <DatePersonale
              onBackClick={handleBackButtonClick}
            />
            ) : showVerificareProiecte ? (
              <VerificareProiecte
                onBackClick={handleBackButtonClick}
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