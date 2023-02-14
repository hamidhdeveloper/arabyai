import React from "react";
import "./TopicSection.css";

const TopicSection = () => {
  return (
    <div className="TopicSection">
      <div className="TopicSection-left">
        <img
          src="../assets/images/mobileOImg.png"
          alt="or2img"
          className="mobileOImg"
        />
        <h1>Type Few Keywords </h1>
        <h1 style={{ marginTop: "-10px" }}>Describing Your Brand</h1>
        <p>Just, Try to write the subject</p>
        <div className="blogWriteBox">
          <input type="text" placeholder="Write your topic here..." />
          <button>Write</button>
        </div>
        <hr />
      </div>
      <div className="TopicSection-center">
        <img src="../assets/images/orimage.png" alt="orimg" />
      </div>
      <div className="TopicSection-right">
        <h1>Tweeting with the help </h1>
        <h1 style={{ marginTop: "-17px" }}>of AI</h1>
        <p>
          Do you have the idea but confused about what to tweet? Do not worry,
          AI is here to help, try it out now!
        </p>
        <div className="tweetinput">
          <div className="row3">
            <img src="../assets/images/tweet-profile.svg" alt="tweetprofile" />
            <input type="text" placeholder="Please type here..." />
          </div>
          <div className="row4">
            <img src="../assets/images/icons twitter.png" alt="tweetprofile" />
            <button>Tweet</button>
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
