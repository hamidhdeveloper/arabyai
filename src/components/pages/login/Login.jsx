import React from "react";
import "./Login.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="Login">
      <div className="login-left">
        <div className="loginlogo">
          <img src="../assets/images/Araby.ai logo.svg" alt="logo login" />
        </div>
        <div className="welcome">
          <h1>{t('Welcome') } </h1>
          <img src="../assets/images/hand.gif" alt="handicon" />
        </div>
        <p>{t('Please Sign in to continue')}</p>
        <div className="loginform">
          <input type="text" placeholder={t('Enter Your Email')} name="email" />
          <br />
          <input type="password" placeholder={t('Password')} name="email" />
          <a href="#forgot">{t('Forgot password?')}</a>
          <button className="loginbutton">{t('Login')}</button>
          <button className="createAccountbutton">{t('Create Account')}</button>
          <div className="line">
            <div className="left-line">
              <hr />
            </div>
            <div className="center-line">{t('Or Continue With')}</div>
            <div className="right-line">
              <hr />
            </div>
          </div>
          <button className="fbAccountbutton">
           
            <img src="../assets/images/facebook.svg" alt="fb" />
            Facebook
          </button>
          <button className="fbAccountbutton">
           
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
              <span>{t('Login using Mobile')}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="loginbackground">
          <img src="../assets/images/loginbackground.gif" alt="logo" />
        </div>
        <h1>{t('Creating Magic')}</h1>
      </div>
    </div>
  );
};

export default Login;
