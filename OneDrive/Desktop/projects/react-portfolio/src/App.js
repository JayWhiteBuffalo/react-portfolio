import React, { useState } from "react";
import About from "./componets/About";
import Nav from "./componets/Nav";
import ProjectPage from "./componets/ProjectPage";
import Contact from "./componets/ContactForm";
import Resume from "./componets/Resume";
import Footer from "./componets/Footer";
import ParticlesComponent from "./componets/Particles";


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
             return <ProjectPage/>
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