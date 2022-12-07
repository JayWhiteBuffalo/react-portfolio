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

   // const {isHover, setIsHover} = props;
   // const [active, setActive] = useState(skills.category);
    //const styles = {background: `${active}`}

    const skills = shuffle(skillset);
    console.log(skills);
return (
    <div className="skillCont">
            {skills.map((skills, i) => (
              <div
               className={`circle ${skills.category}`}>
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