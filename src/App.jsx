import "./app.css";
import ContactMe from "./component/ContuctMe/ContactMe";
import HeroSection from "./component/HeroScetion/HeroSection";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";

function App() {
  return (
    <div className="bg-[#0B1120]">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
