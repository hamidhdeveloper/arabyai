import React from 'react'
import './SignUpModel.css'
import { useTranslation } from "react-i18next";
const SignUpModel = ({modal,toggleModal}) => {
  const { t } = useTranslation();
  const currentdir= localStorage.getItem('dir') ;
  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="mymodal" style={currentdir === 'rtl' ? { flexDirection: 'row-reverse' } : {}}>
              <div className="modal-left">
                <h1>
                  {t('Join Now And Receive A Special Gift')} <br />
                  {t('From Us')}
                </h1>
                <img src="../assets/images/realSignImg.svg" alt="modelimg" />
              </div>
              <div className="modal-right">
                <h1>{t('Create Account..')} </h1>
                <p>
                {t('Get Access to Social Media, Emails, Articles,')}
                  <br /> {t('Advertisements, Images, and Much More')}
                </p>
                <div className="loginform2">
                  <input
                    type="text"
                    placeholder={t('Enter Your Email')}
                    name="email"
                  />

                  <button className="loginbutton">{t('Continue')}</button>

                  <a href="#regmobile" className="regmobile">
                  {t('Register using Mobile Number?')}
                  </a>

                  <div className="line2">
                    <div className="left-line2">
                      <hr />
                    </div>
                    <div className="center-line2">{t('Or Continue With')}</div>
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
            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUpModel
