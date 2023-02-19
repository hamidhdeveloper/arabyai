import React from "react";
import "./AboutSection.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div className="AboutSection">
      <div className="divtop">
        <h1>{t("Who is Araby AI for?")}</h1>
        <p>{t("If you try any of our services")}</p>
      </div>
      <div className="aboutboxes">
        <div className="box">
          <img class="icon" src="../assets/images/first.svg" alt="first" />
          <h4>{t("Content Marketing Teams")}</h4>
          <h6>{t("kickstart your content now")}</h6>
        </div>
        <div className="box">
          <img class="icon" src="../assets/images/second.svg" alt="first" />
          <h4>{t("Copywriters")}</h4>
          <h6>{t("Never face writers block again")}</h6>
        </div>
        <div className="box">
          <img class="icon" src="../assets/images/third.svg" alt="first" />
          <h4>{t("Entrepreneurs")}</h4>
          <h6>{t("Build your brand's voice, get")}</h6>
        </div>
      </div>
      <div className="thirdrowbutton">
        <button>{t("Start Now")}</button>
      </div>
    </div>
  );
};

export default AboutSection;
