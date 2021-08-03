import React from 'react'
import Data from '../../data/navbar.data.json'
import { Link, useLocation } from 'react-router-dom';
import './navbar.style.scss'
import DropdownSVG from "../../static/dropdown.svg"

const Navbar = () => {
    const location = useLocation()

    const getNavbarLinkClass = (route) => {
        if (route === "/projects/1/" && location.pathname.split("/")[1] === "projects") {
            return "active-navbar-link"
        }
        else {
            return route === location.pathname ? "active-navbar-link" : "inactive-navbar-link"
        }
    }

    return (
        <div className="navbar animate__animated animate__fadeInDown">

            <h1> {Data["title"].toUpperCase()} </h1>

            <ul>
                {
                    Data["routes"].map(({value, route}) =>
                        <div>
                            <Link className={getNavbarLinkClass(route)} to={route}> {value} </Link>
                        </div>
                    )
                }
            </ul>

            <div className="dropdown-container">
                <button> <img src={DropdownSVG} alt="" /> </button>
                <div>
                    {
                        Data["routes"].map(({value, route}) =>
                            <Link className="dropdown-link" to={route}> { value } </Link>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar
