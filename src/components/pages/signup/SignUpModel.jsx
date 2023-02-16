import React from 'react'
import './SignUpModel.css'
const SignUpModel = ({modal,toggleModal}) => {
  return (
    <div>
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
