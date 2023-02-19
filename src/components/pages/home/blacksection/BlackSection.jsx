import React from "react";
import "./BlackSection.css";
import { useTranslation } from "react-i18next";
const BlackSection = () => {
  const { t } = useTranslation();
  return (
    <div className="BlackSection">
      <h1>{t('We turn your text into an image!')}</h1>
      <p>
      {t('Write what you want to visualise')}
      </p>
      <div className="createimgdiv">
        <input type="text" placeholder={t('flying car in space...')} name="search" />
        <button>{t('Create Image')}</button>
      </div>
      <div className="imagesboxes">
        <div className="imgrow">
          <img src="../assets/images/human-robot.svg" class="img1" alt="img1" />
          <img
            src="../assets/images/office-shrek.svg"
            class="img2"
            alt="img2"
          />
        </div>
        <div className="imgrow2">
          <img
            src="../assets/images/horse-riding.svg"
            class="img3"
            alt="img3"
          />
          <img src="../assets/images/curly-hair.svg" class="img4" alt="img4" />
        </div>
      </div>
    </div>
  );
};

export default BlackSection;
