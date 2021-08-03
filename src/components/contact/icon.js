import React from 'react'
import "./icon.style.scss"
import Mail from "../../static/contact_icons/Mail.svg"
import LinkedIn from "../../static/contact_icons/LinkedIn.svg"
import Github from "../../static/contact_icons/github.svg"
import Facebook from "../../static/contact_icons/facebook.svg"

const Icon = ({name, link}) => {
    const nameToSvgMap = {
        mail: Mail,
        linkedin: LinkedIn,
        github: Github,
        facebook: Facebook
    }

    return (
        <a href={ link } target="_blank" rel="noreferrer" className="contact-link">
            <img src={ nameToSvgMap[name] } alt="" className="contact-icon"/>
        </a>
    )
}

export default Icon
