import React, { useState } from "react";
import ProjectScroll from "../Swipe";

const ProjectCards = () => {



const [projectArr] = useState([
    {
        name: 'Rise 2 Challenge',
        description: '',
        link: 'https://thawing-atoll-91539.herokuapp.com/',
        github: 'https://github.com/JayWhiteBuffalo/Rise2Challenge'
    },
    {
        name: 'Step 2 Rhythm',
        description: '',
        link: 'https://jaywhitebuffalo.github.io/Step2Rhythm/',
        github: 'https://github.com/JayWhiteBuffalo/Step2Rhythm'
    },
    {
        name: 'Egregore',
        description: '',
        link: 'https://github.com/JayWhiteBuffalo/Egregore',
        github: 'https://github.com/JayWhiteBuffalo/Egregore'
    },
    {
        name: 'J.A.T.E',
        description: '',
        link: 'https://infinite-chamber-71782.herokuapp.com/',
        github: 'https://github.com/JayWhiteBuffalo/text2Edit'
    },
    {
        name: 'Department Tracker',
        description: '',
        link: 'https://github.com/JayWhiteBuffalo/department-tracker',
        github: 'https://github.com/JayWhiteBuffalo/department-tracker'
    },
    {
        name: 'E-commerance Back-End',
        description: '',
        link: 'https://github.com/JayWhiteBuffalo/Ecommie',
        github: 'https://github.com/JayWhiteBuffalo/Ecommie'
    }
]);

return (
    <section id= "projectsPage">
    <div>
        <h2 className="center">Here are some projects that I've worked on. </h2>
    </div>
    <ProjectScroll/>
    </section>
)

};   

export default ProjectCards;
