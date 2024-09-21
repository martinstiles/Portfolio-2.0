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

    let key = 0
    return (
        <>
            <img onClick={openModal} className="company-logo" src={image} alt="..." />
            <Modal
                className={"modal"}
                overlayClassName={"overlay"}
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                appElement={document.getElementById('app')}
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

                    {/* Optional additional links */}
                    {
                        company.additional_links
                        &&
                        <div className="modal-links">
                            {
                                company.additional_links.map(link => <a href={link.url} target="_blank" rel="noreferrer" key={key++}> {link.alias} </a>)
                            }
                        </div>
                    }

                    {/* Keywords for IT companies */}
                    {
                        company.keyWords
                        &&
                        <Tags tags={company.keyWords} useRandomColors={true} />
                    }
                </div>
            </Modal>
        </>
    )
}

export default CompanyModal
