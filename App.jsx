import React from "react";
import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import Skills from "./Components/Skills";
import Knowledges from "./Components/Knowledges";
import "./styles/Skills.css";
import "./styles/Knowledges.css";
import ProfileCard from "./Components/ProfileCard";



function App() {
  return (
    <div className="App">
     <div className="containers">
      <ProfileCard />
    </div>
      <div className="abb">
        <AboutSection />

        <div className="app-container">
          <Skills />
          <Knowledges />
        </div>

      </div>
    </div>
  );
}

export default App;