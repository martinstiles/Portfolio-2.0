import React from 'react'
import '../style.scss'
import Skill from '../components/skills/skill'

const Skills = () => {
    return (
        <div className="main-container animate__animated animate__fadeIn">
            <div className="skills-container">
                <Skill skill={"frontend"} name={"Frontend"} />
                <Skill skill={"backend"} name={"Backend"} />
                <Skill skill={"data_analysis"} name={"Data analysis"} />
                <Skill skill={"nlp"} name={"NLP"} />
            </div>
        </div>
    )
}

export default Skills
