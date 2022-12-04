import React, { useState } from "react";
import About from "./componets/About";
import Nav from "./componets/Nav";
import Projects from "./componets/projects";
import Contact from "./componets/ContactForm";
import Resume from "./componets/Resume";
import Footer from "./componets/Footer";
import ParticlesComponent from "./componets/Particles";
//import { AnimatePresence, exitBeforeEnter } from 'framer-motion';

function App(){
  
  const [pageSelected, setPageSelected] = useState('About');

  const renderSection = () => {
          if (pageSelected === 'About'){
            return <About/>
          };
          if (pageSelected === 'Contact'){
            return <Contact/>
          };
          if (pageSelected === 'Projects'){
            return <Projects/>
          };
          if (pageSelected === 'Resume'){
            return <Resume/>
          }
          return 'About';
          }  
        
  return (
    <div>
      <Nav
      pageSelected = {pageSelected}
      setPageSelected = {setPageSelected}
      ></Nav>
      <main className="hero-image">
        {renderSection()}
      </main>
      <ParticlesComponent/>
    <Footer/>
    </div>
  );
}

export default App;