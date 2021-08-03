import React from 'react'
import '../style.scss'
import Hi from '../components/home/hi/hi'
import LandingPageSVG from '../components/home/svg/landingPageSVG'

const Home = () => {
    return (
        <div className="main-container">
            <Hi />
            <LandingPageSVG />
        </div>
    )
}

export default Home
