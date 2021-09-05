import React from 'react'
import "./skill.style.scss"
import SkillContent from './skillContent/skillContent'

const Skill = ({ skill, name, description, technologies }) => {
    const skillToClassMap = {
        frontend: "skill-frontend",
        backend: "skill-backend",
        dataAnalysis: "skill-data-analysis",
        nlp: "skill-nlp"
    }

    const activeDivider = (event) => {
        const skillSections = [
            document.querySelector(".skill-frontend"),
            document.querySelector(".skill-backend"),
            document.querySelector(".skill-data-analysis"),
            document.querySelector(".skill-nlp")
        ]

        skillSections.forEach(skillSection => {
            // Checks if the classlists are the same
            if (event.currentTarget.classList === skillSection.classList) {
                skillSection.classList.toggle("open");
            } else {
                skillSection.classList.toggle("closed");
            }
        })
    }

    return (
        <div className={skillToClassMap[skill]} onClick={activeDivider}>
            <h1> {name} </h1>
            <div className="skill-content">
                <SkillContent
                    description={description}
                    technologies={technologies}
                />
            </div>
        </div>
    )
}

export default Skill
