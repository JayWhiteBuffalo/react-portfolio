import React from "react";
import { GiLoad, GiSkills } from 'react-icons/gi';
import { FaReact } from 'react-icons/fa';
import CV from '../../assets/files/CV.pdf';
import Knowledge from "../Knowledge";

const Resume = () => {


    return(
        <div>
      <section>
        <div>
          <h1 className="center"> Click the React Icon to Download my CV.</h1>
        </div>
        <div>
          <div className="center resumeBar flex-row">
          <div>
            <button className="Librarybtn" type="click">Libraries</button>
          </div>
          <div>
            <button className="Frameworkbtn" type="click">Frameworks</button>
          </div>
            <a href={CV} download>
                <FaReact className = "rotate" fontSize={'3em'}/>
            </a>
            <div>
            <button className="Conceptsbtn" type="click">Concepts</button>
          </div>
          <div>
            <button className="Languagesbtn" type="click">Languages</button>
          </div>
          </div>
        </div>
      </section>
      <section className="contentCont">
      <Knowledge></Knowledge>
      </section>
    </div>
    )
}

export default Resume;