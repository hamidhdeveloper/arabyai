import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="login">Login</Link>
        <Link to="login"><img src="../assets/images/Login.svg" alt="img" /></Link>
        <Link to="signup"><button>Sign Up</button></Link>
        <span>ع</span>
      </div>
    </div>
  );
};

export default Header;
