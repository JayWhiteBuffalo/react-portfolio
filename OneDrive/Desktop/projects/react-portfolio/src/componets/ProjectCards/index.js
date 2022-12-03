import React, { useState } from "react";

const ProjectCards = () => {



const [projects] = useState([
    {
        name: 'Rise 2 Challenge',
        description: '',
        link: '',
        github: ''
    },
    {
        name: 'Step 2 Rhythm',
        description: '',
        link: '',
        github: ''
    },
    {
        name: 'Egregore',
        description: '',
        link: '',
        github: ''
    },
    {
        name: 'J.A.T.E',
        description: '',
        link: '',
        github: ''
    },
    {
        name: 'Department Tracker',
        description: '',
        link: '',
        github: ''
    },
    {
        name: 'E-commerance Back-End',
        description: '',
        link: '',
        github: ''
    }
]);

return (
    <section>
    <div className="mainCont flex-row space-between">
        {projects.map((image, i) => (  
            <div className="projectCard">
                <h3>{projects[i].name}</h3>
            <img 
            src={require(`../../assets/images/${i}.png`)}
            alt={projects[i].name}
            className = "img-thumbnail mx-1"
            key={projects[i].name}
            />
    </div>
        ))}
    </div>
    </section>
)

};   

export default ProjectCards;
