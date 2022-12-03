import React, { useState } from "react";
import P1 from "../../assets/images/0.png";
import P2 from "../../assets/images/1.png";
import P3 from "../../assets/images/2.jpg";
import P4 from "../../assets/images/3.png";
import P5 from "../../assets/images/4.png";
import P6 from "../../assets/images/5.jpg";

const ProjectCards = () => {



const [projects] = useState([
    {
        name: 'Rise 2 Challenge',
        description: '',
        image: '../../assets/images/0.png',
        link: '',
        github: ''
    },
    {
        name: 'Step 2 Rhythm',
        description: '',
        image: P2,
        link: '',
        github: ''
    },
    {
        name: 'Egregore',
        description: '',
        image: P3,
        link: '',
        github: ''
    },
    {
        name: 'J.A.T.E',
        description: '',
        image: P4,
        link: '',
        github: ''
    },
    {
        name: 'Department Tracker',
        description: '',
        image: P5,
        link: '',
        github: ''
    },
    {
        name: 'E-commerance Back-End',
        description: '',
        image: P6,
        link: '',
        github: ''
    }
]);

const [currentCard, setCurrentCard] = useState(projects);

console.log(currentCard[0].name)
return (
    <section>
    <div className="">
        {currentCard.map((i) => (  
            <div>
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
