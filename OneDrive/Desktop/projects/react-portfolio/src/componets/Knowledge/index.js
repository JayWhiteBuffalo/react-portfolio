import React, {useState} from "react";

const Knowledge = (props) => {

    const skillset = [
        {  
          category: 'Languages',
          content: 'HTML',
        },
        {  
          category: 'Languages',
          content: 'CSS',
        },
        {  
          category: 'Languages',
          content: 'Javascript',
        },
        {  
          category: 'Languages',
          content: 'SQL',
        },
        {  
          category: 'Languages',
          content: 'Bash',
        },
        {  
          category: 'Library',
          content: 'React',
        },
        {  
          category: 'Library',
          content: 'Node',
        },
        {  
          category: 'Library',
          content: 'jQuery',
        },
        {  
          category: 'Library',
          content: 'MongoDB',
        },
        {  
          category: 'Library',
          content: 'Sequelize',
        },
        {  
          category: 'Library',
          content: 'Mongoose',
        },
        {  
          category: 'Framework',
          content: 'Express',
        },
        {  
          category: 'Framework',
          content: 'Bootstrap',
        },
        {  
          category: 'Framework',
          content: 'Bulma',
        },
        {  
          category: 'Framework',
          content: 'Jest',
        },  
      ]

      // Randomize the order of the array so each time page loads it is diffrent
    const shuffle = () => [...skillset].sort(() => Math.random() - 0.5);
    const newSkillset = shuffle(skillset);
    const skills = newSkillset;
    console.log(skills)

   // const {isHover, setIsHover} = props;
    const [isActive, setIsActive] = useState(false);

    const toggle = (e, skill) => {
      console.log(e.target.id)
      if (!isActive){
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    }

return (
    <div className="skillCont">
            {skills.map((skills, i) => (
              <div
               id={skills.content}
               onMouseEnter={toggle}
               className={`circle ${isActive ? skills.category : ''}`}>
                <h1
                key={skills.content}
                >{skills.content}
                </h1>
              </div>
            ))}
    </div>
  );
};

export default Knowledge;