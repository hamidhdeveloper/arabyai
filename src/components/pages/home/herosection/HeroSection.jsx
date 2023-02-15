import React from "react";
import Typewriter from "typewriter-effect";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="HeroSection">
      {/* animation */}
      <div class="waves">
        <div className="HeroSection-left">
          <p>Learn more about Araby AI</p>
          <h1>An AI based content</h1>
          <h1 style={{ marginTop: "-11px", marginBottom: "20px" }}>
            generator
          </h1>
          <h6>In a few minutes you can create</h6>

          <Typewriter
            options={{
              strings: [
                "New Articles",
                "Social Media Content",
                "Emails",
                "I Love to Design.",
                "Front-End Developer Hamid",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <button style={{ marginTop: "20px", marginBottom: "50px" }}>
            Start Now
          </button>
        </div>
        <div className="HeroSection-right">
          <img src="../assets/images/RobotA2-540.gif" alt="gif1" />
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
