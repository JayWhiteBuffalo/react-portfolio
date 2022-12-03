import React, { useState } from "react";
import About from "./componets/About";
import Nav from "./componets/Nav";
import Projects from "./componets/projects";
import Contact from "./componets/ContactForm";
import Resume from "./componets/Resume";

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
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;