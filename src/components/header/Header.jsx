import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../pages/signup/SignUpModel.css";
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
      {/* after header right popup */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="mymodal">
              <div className="modal-left">
                <h1>
                  Join Now And Receive A Special Gift <br />
                  From Us
                </h1>
                <img src="../assets/images/realSignImg.svg" alt="modelimg" />
              </div>
              <div className="modal-right">
                <h1>Create Account.. </h1>
                <p>
                  Get Access to Social Media, Emails, Articles,
                  <br /> Advertisements, Images, and Much More
                </p>
                <div className="loginform2">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                  />
                  
                  <button className="loginbutton">Continue</button>
                  
                    <a href="#regmobile" className="regmobile">
                       Register using Mobile Number?
                    </a>
                  
                  <div className="line2">
                    <div className="left-line2">
                      <hr />
                    </div>
                    <div className="center-line2">Or Continue With</div>
                    <div className="right-line2">
                      <hr />
                    </div>
                  </div>
                  <div className="twobutton">
                  <button className="regfbAccountbutton">
                   
                    <img src="../assets/images/facebook.svg" alt="fb" />
                    Facebook
                  </button>
                  <button className="regfbAccountbutton">
                    
                    <img src="../assets/images/googleIcon.svg" alt="gb" />
                    Google
                  </button>
                  </div>
                  <button className="regappleAccountbutton">
                    
                    <img src="../assets/images/apple.svg" alt="app" />
                    Apple
                  </button>
                 
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      {/* popup */}
    </div>
  );
};

export default Header;
