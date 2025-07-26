import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import AuthForm from "./components/AuthForm";

const App = () => {
  const [modalType, setModalType] = useState(null); // "student", "employer", "signup"

  const closeModal = () => setModalType(null);

  return (
    <>
      <Navbar />
      <Home onLoginClick={setModalType} />

      <Modal isOpen={modalType !== null} onClose={closeModal} title={`${
        modalType === "signup" ? "Sign Up" : "Login"
      } to HireZon`}>
        <AuthForm
          isSignup={modalType === "signup"}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Will connect to backend soon!");
            closeModal();
          }}
        />
      </Modal>
    </>
  );
};

export default App;
