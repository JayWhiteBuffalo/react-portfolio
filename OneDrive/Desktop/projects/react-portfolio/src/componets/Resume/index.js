import React from "react";
import { GiLoad } from 'react-icons/gi';
import { GiFreemasonry } from 'react-icons/gi';
import { GiProcessor } from 'react-icons/gi';
import { GiCaesar } from 'react-icons/gi';
import CV from '../../assets/files/CV.pdf';

const Resume = () => {

    return(
        <div className="contentCont">
      <section>
        <div>
          <h2>Jay White's Resume:</h2>
        </div>
        <div>
          <div className="center">
            <a href={CV} download>
                <GiLoad fontSize={'3em'}/>
            </a>
          </div>
        </div>
      </section>
      <section className="skillsCont">
        <div className="resumeCard">
          <ul>
            <li>
              <GiProcessor fontSize={'3em'}/>
            </li>
            <h3>Libraries/ Frameworks</h3>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
            <li>CSS Frameworks</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>NoSQL</li>
            <li>Jest</li>
            <li>JQuery</li>
          </ul>
        </div>
        <div className="resumeCard">
          <ul>
          <li>
              <GiFreemasonry fontSize={'3em'}/>
            </li>
            <h3>Languages</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="resumeCard">
          <ul>
          <li>
              <GiCaesar fontSize={'3em'}/>
            </li>
            <h3>Sofware Skills</h3>
            <li>TDD</li>
            <li>OOP</li>
            <li>ORM</li>
            <li>MVC</li>
            <li>Asyc JS</li>
            <li>Responsive design</li>
            <li>DOM</li>
          </ul>
        </div>
      </section>
    </div>
    )
}

export default Resume;