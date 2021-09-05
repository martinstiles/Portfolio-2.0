import React from 'react'
import "./skillContent.style.scss"

const SkillContent = ({ description, technologies }) => {
    return (
        <div className="skill-content-container">
            <p> { description } </p>
            <h3> Tools & Technologies </h3>
            <div>
                {
                    technologies.map((technology) => <p> &bull; {technology} </p>)
                }
            </div>
        </div>
    )
}

export default SkillContent
