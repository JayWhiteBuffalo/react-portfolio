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
          <div>
            {/* download imported PDF file through a-tag */}
            <a href={CV} download>
                <GiLoad fontSize={'3em'}/>
            </a>
          </div>
        </div>
      </section>
      <section className="mainCont">
        <div className="resumeCard">
          <h3>MERN Stack</h3>
          <ul>
            <li>
              <GiProcessor fontSize={'3em'}/>
            </li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
        <div className="resumeCard">
          <h3>Tools</h3>
          <ul>
          <li>
              <GiFreemasonry fontSize={'3em'}/>
            </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>CSS Frameworks</li>
            <li>SQL</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>NoSQL</li>
            <li>Jest</li>
            <li>WebPack</li>
          </ul>
        </div>
        <div className="resumeCard">
          <h3>Concepts</h3>
          <ul>
          <li>
              <GiCaesar fontSize={'3em'}/>
            </li>
            <li>Test Driven Development</li>
            <li>Object Oriented Programming</li>
            <li>Object Relational Mapping</li>
            <li>Model View Controller</li>
            <li>Computer Science</li>
          </ul>
        </div>
      </section>
    </div>
    )
}

export default Resume;