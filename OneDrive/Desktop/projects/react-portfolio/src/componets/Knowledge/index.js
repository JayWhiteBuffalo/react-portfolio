import React, {useState} from "react";

const Knowledge = ({ category }) => {

    const [currentSkill, setCurrentSkill] = useState();


    const skills = [
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

return (
    <div className="skillCont">
            {skills.map((skill, i) => (
              <div className={`${skill.category && 'circle'}`}>
                <h1
                key={skill.content}
                >{skill.content}
                </h1>
              </div>
            ))}
    </div>
  );
};

export default Knowledge;