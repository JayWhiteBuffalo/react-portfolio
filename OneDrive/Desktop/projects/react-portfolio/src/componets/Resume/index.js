import React from "react";
import { GiLoad } from 'react-icons/gi';
import { GiFreemasonry } from 'react-icons/gi';
import { GiProcessor } from 'react-icons/gi';
import { GiCaesar } from 'react-icons/gi';
import CV from '../../assets/files/CV.pdf';
import Knowledge from "../Knowledge";

const Resume = () => {

    return(
        <div>
      <section>
        <div>
          <div className="center resumeBar flex-row">
          <div>
            <button className="Library" type="click">Libraries</button>
          </div>
          <div>
            <button className="Framework" type="click">Frameworks</button>
          </div>
            <a href={CV} download>
                <GiLoad fontSize={'3em'}/>
            </a>
            <div>
            <button className="Concepts" type="click">Concepts</button>
          </div>
          <div>
            <button className="Languages" type="click">Languages</button>
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