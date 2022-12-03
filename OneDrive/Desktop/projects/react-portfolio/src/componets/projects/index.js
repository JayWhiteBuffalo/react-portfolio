import React from "react";
import Project1 from "../../assets/images/Rise-to-the-challenge.png";
import Project2 from "../../assets/images/Step2Rythymthumbnail.png";


function Projects () {
    return (
        <section>
            <div id="projects" className="mainCont">
                <div className="contentCont">
            <h1>Projects</h1>
                <div className="mainCont">
                    <div className="projectCard">
                        <img src={Project1} alt="Portfolio Project Thumbnail"></img>
                    </div>
                    <div className="projectCard">
                        <img src={Project2} alt="Portfolio Project Thumbnail"></img>
                    </div>

                </div>
            </div>
            </div>
        </section>
    );
}

export default Projects;