import React from "react";
import "./header.css";
const Header = () => {
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
        <a href="#login">Login</a>
        <img src="../assets/images/Login.svg" />
        <button>Sign Up</button>
        <span>ع</span>
      </div>
    </div>
  );
};

export default Header;
