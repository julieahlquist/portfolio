import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header-wrapper">
            <h1 className="header-title">
                <Link className="text-white hover:text-grey-light no-underline" to='/'>My Portfolio</Link>
            </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink className="text-white hover:text-grey-light no-underline font-mono" to='/about'>About Me</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-grey-light no-underline font-mono" to='/projects'>My Projects</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-grey-light no-underline font-mono" to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header