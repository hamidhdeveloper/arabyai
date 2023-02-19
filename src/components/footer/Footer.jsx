import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="innerFooter">
        <div className="footer-col-1">
          <h4>{t("Company")}</h4>
          <ul className="navlinkFooter">
            <li>
              <a href="#link">{t("Features")}</a>
            </li>
            <li>
              <a href="#link">{t("Terms and Conditions")}</a>
            </li>
            <li>
              <a href="#link">{t("Privacy Policy")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-1">
          <h4>{t("Help")}</h4>
          <ul className="navlinkFooter">
            <li>
              <a href="#link">{t("Contact Us")}</a>
            </li>
            <li>
              <a href="#link">{t("Share Feedback")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-1">
          <h4>{t("Support")}</h4>
          <ul className="navlinkFooter">
            <li>
              <a href="#link">{t("Report a Bug")}</a>
            </li>
            <li>
              <a href="#link">{t("Report an Outage")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-4">
          <div className="socialicons">
            <img src="../assets/images/icon11.png" alt="icon11" />
            <span>@Araby AI</span>
          </div>
          <div className="socialicons">
            <img src="../assets/images/icon22.png" alt="icon22" />
            <span>@Araby AI</span>
          </div>
          <div className="socialicons">
            <img src="../assets/images/icon33.png" alt="icon33" />
            <span>@Araby AI</span>
          </div>
          <div className="socialicons">
            <img src="../assets/images/icon44.png" alt="icon44" />
            <span>@Araby AI</span>
          </div>
        </div>
      </div>
      <div className="footerlogo">
        <img src="../assets/images/footerlogo.png" alt="footerlogo" />
        <p>{t("2023 Araby AI All rights reserved.")}</p>
      </div>
    </div>
  );
};

export default Footer;
