import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="login-left">
        <div className="loginlogo">
          <img src="../assets/images/Araby.ai logo.svg" alt="logo login" />
        </div>
        <div className="welcome">
          <h1>Welcome </h1>
          <img src="../assets/images/hand.gif" alt="handicon" />
        </div>
        <p>Please Sign in to continue</p>
        <div className="loginform">
          <input type="text" placeholder="Enter Your Email" name="email" />
          <br />
          <input type="password" placeholder="Password" name="email" />
          <a href="#forgot">Forgot password?</a>
          <button className="loginbutton">Login</button>
          <button className="createAccountbutton">Create Account</button>
          <div className="line">
            <div className="left-line">
              <hr />
            </div>
            <div className="center-line">Or Continue With</div>
            <div className="right-line">
              <hr />
            </div>
          </div>
          <button className="fbAccountbutton">
            {" "}
            <img src="../assets/images/facebook.svg" alt="fb" />
            Facebook
          </button>
          <button className="fbAccountbutton">
            {" "}
            <img src="../assets/images/googleIcon.svg" alt="gb" />
            Google
          </button>
          <button className="appleAccountbutton">
            {" "}
            <img src="../assets/images/apple.svg" alt="app" />
            Apple
          </button>
          <div className="mobilelogin">
            <a href="#mobilelogin">
              <img src="../assets/images/leftarrow.png" alt="arrow" />
              <span>Login using Mobile</span>
            </a>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="loginbackground">
          <img src="../assets/images/loginbackground.gif" alt="logo" />
        </div>
        <h1>Creating Magic</h1>
      </div>
    </div>
  );
};

export default Login;
