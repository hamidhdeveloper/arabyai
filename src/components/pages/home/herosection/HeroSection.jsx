import React from "react";
import Typewriter from "typewriter-effect";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  

  const { t } = useTranslation();
 
  return (
    <div className="HeroSection">
      {/* animation */}
      <div className="waves">
        <div className="HeroSection-left">
          <p>{t("Learn more about Araby AI")}</p>
          <h1>{t("An AI based content")}</h1>
          <h1 style={{ marginTop: "-11px", marginBottom: "20px" }}>
            {t("generator")}
          </h1>
          <h6>{t("In a few minutes you can create")}</h6>

          <Typewriter
            options={{
              strings: [
                t("New Articles"),
                t("Social Media Content"),
                t("Emails"),
                t("I Love to Design"),
                t("Front-End Developer Hamid"),
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <button style={{ marginTop: "20px", marginBottom: "50px" }}>
            {t("Start Now")}
          </button>
        </div>
        <div className="HeroSection-right">
        {/* {setIsArabic ? ( */}
          <img src="../assets/images/RobotA2-540.gif" alt="gif1" />
          {/* ) : ( */}
          {/* <img src="../assets/images/RobotA-Arabic.gif" alt="gif2" /> */}
          {/* )} */}
          <img
            src="../assets/images/background white.svg"
            alt="background"
            className="backgroundwhite"
          />
        </div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      {/* animation */}
    </div>
  );
};

export default HeroSection;
