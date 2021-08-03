import React from 'react'
import "./image.style.scss"
import ProfileIMG from "../../../static/profileIMG.png"

const Image = () => {
    return (
        <img className="profile-img animate__animated animate__fadeInLeft" src={ProfileIMG} alt="img..." />
    )
}

export default Image
