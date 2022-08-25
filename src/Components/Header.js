import React from 'react'
import logo from "../assets/images/samplelogo.png";

function Header() {
    return (
        <div className="header">
            <div className="flex-row-1"></div>
            <div className="header-logo">
                <img src={logo} alt="logo" className='header-logo-img'/>
            </div>
            <div className="header-nav">
                <a >Home</a>
                <a >About Us</a>
                <a >Services</a>
                <a >Gallery</a>
            </div>
            <div className="flex-row-1"></div>
        </div>
    )
}

export default Header