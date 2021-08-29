import React from 'react'
import '../style.scss'
import Data from "../data/about.data.json"
import Image from '../components/about/imageComponent/image'
import Tags from '../components/common/tags/tags'
import Experience from '../components/about/experience/experience'

const About = () => {
    const tagAnimation = window.innerWidth <= 900 ? "animate__fadeInRight" : "animate__fadeInUp"

    return (
        <div className="main-container">
            <div className="about-container">
                    <Image />
                <div className="about-tag-container">
                    <Tags tags={Data.tags} animation={tagAnimation} />
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
