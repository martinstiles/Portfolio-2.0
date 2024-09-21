import React from 'react'
import '../style.scss'
import Data from "../data/about.data.json"
import Image from '../components/about/imageComponent/image'
// import Tags from '../components/common/tags/tags'
import Experience from '../components/about/experience/experience'

const About = () => {
    return (
        <div className="main-container-start">
            <div className="about-container">
                <Image />
                {/* <div className="about-tag-container">
                    <Tags tags={Data.tags} animation={"animate__fadeInLeft"} />
                </div> */}
            </div>
            <Experience
                consultantProjects={Data.consultantProjects}
                education={Data.education}
                certifications={Data.certifications}
                internships={Data.internships}
                other={Data.other}
            />
        </div>
    )
}

export default About
