import React from 'react'
import '../style.scss'
import Skill from '../components/skills/skill'
import Data from '../data/skills.data.json'

const Skills = () => {
    return (
        <div className="main-container animate__animated animate__fadeIn">
            <div className="skills-container">
                {
                    Data.skillObjects.map((skillObject) =>
                        <Skill
                            skill={skillObject.skill}
                            name={skillObject.name}
                            description={skillObject.description}
                            technologies={skillObject.technologies}
                            links={skillObject.links}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Skills
