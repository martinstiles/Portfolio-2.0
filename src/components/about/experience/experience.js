import React from 'react'
import "./experience.style.scss"
import CompanyModal from '../companyModal/companyModal'
import Capgemini from "../../../static/company_logos/capgemini.png"
import Strise from "../../../static/company_logos/strise.jpeg"
import NTNU from "../../../static/company_logos/ntnu_fit.png"
import Foodora from "../../../static/company_logos/foodora.png"
import Me from "../../../static/company_logos/me.jpeg"
import Army from "../../../static/company_logos/army.png"
import Ayfie from "../../../static/company_logos/ayfie.png"
import Difa from "../../../static/company_logos/difa.png"
import NB from "../../../static/company_logos/nb.png"

const Experience = ({consultantProjects, education, certifications, internships, other}) => {
    const itCompanyToImgMap = {
        capgemini: Capgemini,
        strise: Strise,
        ntnu: NTNU,
        ayfie: Ayfie,
        difa: Difa,
        nb: NB
    }

    const otherCompanyToImgMap = {
        ntnu: NTNU,
        foodora: Foodora,
        me: Me,
        army: Army
    }

    let key = 0

    return (
        <div className="experience-container">
            {/* EXPERIENCE - Consultant */}
            <section className="animate__animated animate__fadeInRight margin-bottom">
                <h2 className="title"> CONSULTING PROJECTS </h2>
                <p>
                    I'm a consultant in <b>Capgemini</b>. I started as a Cloud Engineer, but had a change of heart
                    as I wanted to work closer with data and AI, so I'm currently working as a <b>ML Engineer</b>.
                    I'm not allowed to describe the projects in too much detail, but I've provided a short description
                    of the projects I've been on since I became a consultant.
                </p>
                <p className="see-more"> Click to see more </p>
                {
                    consultantProjects.map(company_obj =>
                        <CompanyModal
                            image={itCompanyToImgMap[company_obj.company]}
                            company={company_obj}
                            key={key++}
                        />
                    )
                }
            </section>

            {/* EDUCATION */}
            <section className={`margin-bottom education-container animate__animated animate__fadeInRight`}>
                <h2 className="title"> EDUCATION </h2>
                <div className="space-between">
                    <h3> { education.title } </h3>
                </div>
                <p> { education.description } </p>
                <div className="modal-links">
                    {
                        education.links.map(link => <p key={key++}><a href={link.url} target="_blank" rel="noreferrer"> {link.alias} </a></p>)
                    }
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className={`margin-bottom education-container animate__animated animate__fadeInRight`}>
                <h2 className="title"> CERTIFICATIONS </h2>
                <div className="modal-links">
                    {
                        certifications.map(cert => <p key={key++}><a href={cert.link} target="_blank" rel="noreferrer"> - {cert.name} </a></p>)
                    }
                </div>
            </section>

            {/* EXPERIENCE - Internships */}
            <section className="animate__animated animate__fadeInRight margin-bottom">
                <h2 className="title"> INTERNSHIPS </h2>
                <p className="see-more"> Click to see more </p>
                {
                    internships.map(company_obj =>
                        <CompanyModal
                            image={itCompanyToImgMap[company_obj.company]}
                            company={company_obj}
                            key={key++}
                        />
                    )
                }
            </section>

            {/* EXPERIENCE - other */}
            <section className="animate__animated animate__fadeInRight">
                <h2 className="title"> OTHER </h2>
                <p className="see-more"> Click to see more </p>
                {
                    other.map(company_obj =>
                        <CompanyModal
                            image={otherCompanyToImgMap[company_obj.company]}
                            company={company_obj}
                            key={key++}
                        />
                    )
                }
            </section>

        </div>
    )
}

export default Experience
