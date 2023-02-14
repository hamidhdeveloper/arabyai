import React from "react";
import "./BlackSection.css";
const BlackSection = () => {
  return (
    <div className="BlackSection">
      <h1>We turn your text into an image!</h1>
      <p>
        Write what you want to visualise, and we will turn your imagination into
        reality!
      </p>
      <div className="createimgdiv">
        <input type="text" placeholder="flying car in space..." name="search" />
        <button>Create Image</button>
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
