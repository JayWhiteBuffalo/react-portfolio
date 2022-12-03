import React, { useState } from "react";
import About from "./componets/About";
import Nav from "./componets/Nav";
import Projects from "./componets/projects";
import Contact from "./componets/ContactForm";

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
          return 'About';
          }
        
        

  return (
    <div>
      <Nav
      contactSelected = {pageSelected}
      setContactSelected = {setPageSelected}
      ></Nav>
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;