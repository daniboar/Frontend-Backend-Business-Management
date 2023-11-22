import React, { useState } from 'react';
import Welcome from './Welcome';
import LoginForm from './LogIn';
import Modal from 'react-modal';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBackClick = () => {
    setShowLogin(false);
  };

  const handleApplyCVClick = () => {
      setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }



  return (
    <div className="App">
      {showLogin ? (
        <LoginForm onBackClick={handleBackClick}/>
      ) : (
        <Welcome 
        onLoginClick={handleLoginClick} 
        onApplyCVClick ={handleApplyCVClick}/>    
      )}
      <Modal
        isOpen ={isModalOpen}
        onRequestClose = {closeModal}
        contentLabel = "CV adaugat cu sucess"
      >
        <h1>CV
          <p>Nume: Boar</p>
            <p> Prenume: Daniel-Ioan </p>
             <p>Email: daniboar@yahoo.com</p>
             <p>Domeniu: IT</p>
        </h1>
        <button onClick = {closeModal}>Inchide</button>
      </Modal>
    </div>
  );
}

export default App;
