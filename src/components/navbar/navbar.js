import React from 'react'
import Data from './navbar.data.json'
import { Link } from 'react-router-dom';
// import NavbarLink from './navbarLink/navbarLink'
import './navbar.style.scss'

const Navbar = () => {
    return (
        <div className="navbar">

            <h1> {Data["title"].toUpperCase()} </h1>

            <ul>
                {
                    Data["routes"].map(({value, route}) =>
                        <div className="navbar-link-container">
                            <div></div>
                            <Link className="navbar-link" to={route}> {value} </Link>
                        </div>
                    )
                }
                {/* <NavbarLink value={value} route={route} /> */}
            </ul>

        </div>
    )
}

export default Navbar
