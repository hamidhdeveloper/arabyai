import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutSection from "./components/pages/home/aboutsection/AboutSection";
import BlackSection from "./components/pages/home/blacksection/BlackSection";
import EmailSection from "./components/pages/home/emailsection/EmailSection";
import HeroSection from "./components/pages/home/herosection/HeroSection";
import TopicSection from "./components/pages/home/topicsection/TopicSection";
import './index.css'

function App() {
  return (
    <div className="App">
         <Header /> 
         <HeroSection />
         <EmailSection />
         <BlackSection />
         <TopicSection />
         <AboutSection />
         <Footer />
    </div>
  );
}

export default App;
