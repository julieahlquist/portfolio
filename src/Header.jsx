import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header-wrapper" style={{ borderBottom: '4px solid white'}}>
            <h1 className="header-title">
                <Link className="text-white hover:text-pink-lighter no-underline" to='/'>JULIE AHLQUIST</Link>
            </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink className="text-white hover:text-pink-lighter no-underline font-mono" to='/about'>About</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-pink-lighter no-underline font-mono" to='/projects'>Projects</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-pink-lighter no-underline font-mono" to='/CV'>CV</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header