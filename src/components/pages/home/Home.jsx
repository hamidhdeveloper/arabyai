import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import AboutSection from "./aboutsection/AboutSection";
import BlackSection from "./blacksection/BlackSection";
import EmailSection from "./emailsection/EmailSection";
import HeroSection from "./herosection/HeroSection";
import TopicSection from "./topicsection/TopicSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <EmailSection />
      <BlackSection />
      <TopicSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
