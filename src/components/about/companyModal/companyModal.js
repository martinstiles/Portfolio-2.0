import React, { useState } from 'react'
import Modal from 'react-modal';
import CloseIcon from "../../../static/close.svg"
import Tags from "../../common/tags/tags"
import "./companyModal.style.scss"

const CompanyModal = ({image, company}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <img onClick={openModal} className="company-logo" src={image} alt="..." />
            <Modal
                className={"modal"}
                overlayClassName={"overlay"}
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className="modal-company-container">
                    <div>
                        <div className="company-header">
                            <h2> {company.job_title} </h2>
                            <img src={CloseIcon} alt="" onClick={closeModal}/>
                        </div>

                        <a className="company-link" href={company.link} target="_blank" rel="noreferrer">
                            <img className="company-logo-in-modal" src={image} alt="..." />
                            <h3> {company.name} </h3>
                        </a>

                        <h3 className="company-duration"> {company.duration} </h3>
                    </div>

                    <p className="modal-description"> {company.description} </p> 

                    {
                        company.technologies
                        &&
                        <Tags tags={company.technologies} useRandomColors={true} />
                    }
                </div>
            </Modal>
        </>
    )
}

export default CompanyModal
