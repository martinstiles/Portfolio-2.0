import React from 'react'
import '../style.scss'
import Data from "../data/contact.data.json"
import Icon from '../components/contact/icon'

const Contact = () => {
    let key = 0
    return (
        <div className="main-container animate__animated animate__fadeIn">
            <div className="contact-container">
                {
                    Data.linkObjects.map(({name, link}) => 
                        <Icon name={name} link={link} key={key++} />
                    )
                }
            </div>
        </div>
    )
}

export default Contact
