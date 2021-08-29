import React from 'react'
import "./experience.style.scss"
import CompanyModal from '../companyModal/companyModal'
import Capgemini from "../../../static/company_logos/capgemini.png"
import Strise from "../../../static/company_logos/strise.jpeg"
import NTNU from "../../../static/company_logos/ntnu_fit.png"
import Foodora from "../../../static/company_logos/foodora.png"
import Me from "../../../static/company_logos/me.jpeg"
import Army from "../../../static/company_logos/army.png"

const Experience = ({education, itCompanies, otherCompanies}) => {
    const itCompanyToImgMap = {
        capgemini: Capgemini,
        strise: Strise,
        ntnu: NTNU
    }

    const otherCompanyToImgMap = {
        ntnu: NTNU,
        foodora: Foodora,
        me: Me,
        army: Army
    }

    const onMountAnimation = window.innerWidth < 900 ? "animate__fadeInLeft" : "animate__fadeInDown"

    return (
        <div className="experience-container">

            {/* EDUCATION */}
            <section className={`margin-bottom education-container animate__animated ${onMountAnimation}`}>
                <h2 className="title"> EDUCATION </h2>
                <div className="space-between">
                    <h3> { education.title } </h3>
                </div>
                <p> { education.description } </p>
            </section>

            {/* EXPERIENCE - IT */}
            <section className="animate__animated animate__fadeInRight margin-bottom">
                <h2 className="title"> EXPERIENCE — IT </h2>
                <p className="see-more"> Click to see more </p>
                {
                    itCompanies.map(company_obj =>
                        <CompanyModal
                            image={itCompanyToImgMap[company_obj.company]}
                            company={company_obj}
                        />
                    )
                }
            </section>

            {/* EXPERIENCE - IT */}
            <section className="animate__animated animate__fadeInRight">
                <h2 className="title"> EXPERIENCE — OTHER </h2>
                <p className="see-more"> Click to see more </p>
                {
                    otherCompanies.map(company_obj =>
                        <CompanyModal
                            image={otherCompanyToImgMap[company_obj.company]}
                            company={company_obj}
                        />
                    )
                }
            </section>

        </div>
    )
}

export default Experience
