import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="divtop">
        <h1>Who is Araby AI for?</h1>
        <p>
          If you try any of our services, you'll discover a platform that
          writers can't live without.
        </p>
      </div>
      <div className="aboutboxes">
        <div className="box">
          <img class="icon" src="../assets/images/first.svg" alt="first" />
          <h4>Content Marketing Teams</h4>
          <h6>
            kickstart your content now with simple steps and improve your
            brand's voice and tone.
          </h6>
        </div>
        <div className="box">
          <img class="icon" src="../assets/images/second.svg" alt="first" />
          <h4>Copywriters</h4>
          <h6>
            Never face writers block again. Generate creative content that
            aligns with your ideas.
          </h6>
        </div>
        <div className="box">
          <img class="icon" src="../assets/images/third.svg" alt="first" />
          <h4>Entrepreneurs</h4>
          <h6>
            Build your brand's voice, get your thoughts out to the world and
            educate your customers without the need for a dedicated copywriting
            staff.
          </h6>
        </div>
      </div>
      <div className="thirdrowbutton">
        <button>Start Now</button>
      </div>
    </div>
  );
};

export default AboutSection;
