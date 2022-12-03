import React, { useState } from "react";
import About from "./componets/About";
import Nav from "./componets/Nav";
import Projects from "./componets/projects";
import Contact from "./componets/ContactForm";

function App(){
  
  const [contactSelected, setContactSelected] = useState('About');

  const renderSection = () => {
          if (contactSelected === 'About'){
            return <About/>
          };
          if (contactSelected === 'Contact'){
            return <Contact/>
          };
          if (contactSelected === 'Projects'){
            return <Projects/>
          };
          return 'About';
          }
        
        

  return (
    <div>
      <Nav
      contactSelected = {contactSelected}
      setContactSelected = {setContactSelected}
      ></Nav>
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;