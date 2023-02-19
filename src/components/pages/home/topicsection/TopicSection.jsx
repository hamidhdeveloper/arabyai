import React from "react";
import "./TopicSection.css";
import { useTranslation } from "react-i18next";

const TopicSection = () => {
  const { t } = useTranslation();
  return (
    <div className="TopicSection">
      <div className="TopicSection-left">
        <img
          src="../assets/images/mobileOImg.png"
          alt="or2img"
          className="mobileOImg"
        />
        <h1>{t("Type Few Keywords")} </h1>
        <h1 style={{ marginTop: "-10px" }}>{t("Describing Your Brand")}</h1>
        <p>{t("Just, Try to write the subject")}</p>
        <div className="blogWriteBox">
          <input type="text" placeholder={t("Write your topic here...")} />
          <button>{t("Write")}</button>
        </div>
        <hr />
      </div>
      <div className="TopicSection-center">
        <img src="../assets/images/orimage.png" alt="orimg" />
      </div>
      <div className="TopicSection-right">
        <h1>{t("Tweeting with the help")} </h1>
        <h1 style={{ marginTop: "-17px" }}>{t("of AI")}</h1>
        <p>{t("Do you have the idea but confuse")}</p>
        <div className="tweetinput">
          <div className="row3">
            <img src="../assets/images/tweet-profile.svg" alt="tweetprofile" />
            <input type="text" placeholder={t("Please type here...")} />
          </div>
          <div className="row4">
            <img src="../assets/images/icons twitter.png" alt="tweetprofile" />
            <button>{t("Tweet")}</button>
          </div>
        </div>
        <img
          src="../assets/images/tweet.svg"
          alt="tweetprofile"
          className="tweetimg"
        />
      </div>
    </div>
  );
};

export default TopicSection;
