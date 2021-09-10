import React from 'react'
import "./skillContent.style.scss"

const SkillContent = ({ description, technologies, links }) => {
    return (
        <div className="skill-content-container">
            <p> { description } </p>

            {
                links &&
                links.map(linkObj =>
                    <a href={linkObj.url} target="_blank" rel="noreferrer"> {linkObj.name} </a>
                )
            }

            <h3> Tools/Technologies/Concepts </h3>

            <div>
                {
                    technologies.map((technology) => <p> &bull; {technology} </p>)
                }
            </div>
        </div>
    )
}

export default SkillContent
