import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../pages/signup/SignUpModel.css";
import SignUpModel from "../pages/signup/SignUpModel";
const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="../assets/images/Araby.ai logo.svg"
          className="logo"
          alt="logo main"
        />
      </div>
      <div className="header-right">
        <Link to="login">Login</Link>
        <Link to="login">
          <img src="../assets/images/Login.svg" alt="img" />
        </Link>
        <button onClick={toggleModal}>Sign Up</button>
        <span>ع</span>
      </div>
      <SignUpModel modal={modal} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;
