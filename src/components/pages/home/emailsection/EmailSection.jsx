import React from "react";
import "./EmailSection.css";

const EmailSection = () => {
  return (
    <div className="EmailSection">
      <div className="EmailSection-left">
        <h1>
          Confused about writing <br />
          an email ?
        </h1>
        <p>
          With Araby AI, writing an email just <br /> became easier. Simply
          enter the <br />
          topic you want to write about and <br />
          leave all the hassle to us.
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
        />
      </div>
      <div className="EmailSection-right">
        <div className="emailbox">
          <div className="row1">
            <span>From:</span>{" "}
            <input
              type="text"
              placeholder="Sender Name"
              style={{ marginRight: "129px" }}
            />{" "}
            <span>To:</span> <input type="text" placeholder="Your Name" />
          </div>
          <div className="row2">
            <span>Subject:</span>{" "}
            <input type="text" placeholder="Enter your topic here..." />{" "}
          </div>
          <button style={{ marginTop: "20px", marginBottom: "50px" }}>
            Write
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
