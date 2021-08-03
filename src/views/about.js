import React from 'react'
import '../style.scss'
import Data from "../data/about.data.json"
import Image from '../components/about/imageComponent/image'
import Tags from '../components/common/tags/tags'
import Experience from '../components/about/experience/experience'

const About = () => {
    return (
        <div className="main-container">
            <div className="about-container">
                    <Image />
                <div className="about-tag-container">
                    <Tags tags={Data.tags} />
                </div>
            </div>
            <Experience
                education={Data.education}
                itCompanies={Data.itCompanies}
                otherCompanies={Data.otherCompanies}
            />
        </div>
    )
}

export default About
