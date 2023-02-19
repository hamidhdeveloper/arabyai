import React from "react";
import "./EmailSection.css";
import { useTranslation } from "react-i18next";

const EmailSection = () => {
  const { t } = useTranslation();
  const currentdir= localStorage.getItem('dir') ;
  // console.log("cureent direction "+currentdir);

  return (
    <div className="EmailSection">
      <div className="EmailSection-left">
        <h1>
          {t("Confused about writing")} <br />
          {t("an email?")}
        </h1>
        <p>
          {t("With Araby AI, writing an email just")} <br />{" "}
          {t("became easier. Simply enter the")} <br />
          {t("topic you want to write about and")} <br />
          {t("leave all the hassle to us.")}
        </p>
        
        <img
          src="../assets/images/thinking.svg"
          className="thinkingimge"
          alt="think"
        />
        <img
          src="../assets/images/arrow.png"
          className="arrowimge"
          alt="arrow"
          style={currentdir === 'rtl' ? { right: '429px',transform: 'rotate(356deg)' } : {}}/>
      </div>
      <div className="EmailSection-right">
        <div className="emailbox">
          <div className="row1">
            <span>{t("From")}:</span>{" "}
            <input
              type="text"
              placeholder={t("Sender Name")}
              style={{ marginRight: "129px" }}
            />{" "}
            <span>{t("To")}:</span>{" "}
            <input type="text" placeholder={t("Your Name")} />
          </div>
          <div className="row2">
            <span>{t("Subject")}:</span>{" "}
            <input type="text" placeholder={t("Enter your topic here...")} />{" "}
          </div>
          <button style={{ marginTop: "20px", marginBottom: "50px" }}>
            {t("Write")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
