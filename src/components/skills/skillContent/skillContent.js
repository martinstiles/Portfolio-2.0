import React from 'react'
import "./skillContent.style.scss"

const SkillContent = ({ description, technologies, links }) => {
    let key = 0
    return (
        <div className="skill-content-container">
            <p> { description } </p>

            {
                links &&
                links.map(linkObj =>
                    <a href={linkObj.url} target="_blank" rel="noreferrer" key={key++}> {linkObj.name} </a>
                )
            }

            <h3> Tools/Technologies/Concepts </h3>

            <div>
                {
                    technologies.map((technology) => <p key={key++}> &bull; {technology} </p>)
                }
            </div>
        </div>
    )
}

export default SkillContent
