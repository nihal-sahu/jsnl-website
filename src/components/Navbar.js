import React, { useState, useEffect } from 'react'
import  { Link } from 'react-router-dom'
// import logo from '../../public/images/JSNL-logo.svg' //importing fingerprint icon
import { FaBars, FaTimes } from 'react-icons/fa' //importing hamburger menu icons
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value= {{ color: '#fff'}}>
                <div className = "navbar">
                    <div className = "navbar-container container">
                    {/* logo to go home */}
                    <Link to = '/' className="navbar-logo" onClick = {closeMobileMenu}>
                            <img src = {process.env.PUBLIC_URL + '/images/JSNL-logo.svg'}
                              style = {{transition: "all 0.3s ease"}}
                              onMouseOver={e => (e.currentTarget.src = '/images/JSNL-logo-inverted.svg')} 
                              onMouseOut = {e => (e.currentTarget.src = '/images/JSNL-logo.svg')}  width = '118.25' height = '80'  />
                        </Link> 
                        {/* hamburger menu icon */}
                        <div className = "menu-icon" onClick = {handleClick}> 
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        {/*menu is an undefined list */}
                        <ul className = {click ? "nav-menu active" : "nav-menu"}>
                            {/* link to go to website homepage*/}
                            <li className="nav-item">
                                <Link to = '/services' className="nav-links" onClick = {closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            {/* link to go to services tab */}
                            <li className="nav-item">
                                <Link to = '/industries' className="nav-links" onClick = {closeMobileMenu}>
                                    Industries
                                </Link>
                            </li>
                            {/*link to go to products page */}
                            <li className="nav-item">
                                <Link to = '/careers' className="nav-links" onClick = {closeMobileMenu}>
                                    Careers
                                </Link>
                            </li>
                             {/*link to go to products page */}
                             <li className="nav-item">
                                <Link to = '/news' className="nav-links" onClick = {closeMobileMenu}>
                                    News
                                </Link>
                            </li>
                             {/*link to go to products page */}
                             <li className="nav-item">
                                <Link to = '/about-us' className="nav-links" onClick = {closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            {/*button link (used for sign up here)*/}
                            <li className="nav-btn">
                                {/*deciding to switch between mobile sign up button and regular sign up button */}
                                {button ? (
                                    <Link to = '/contact-us' className="btn-link">
                                        <Button buttonStyle = "btn--outline"> CONTACT US </Button>
                                    </Link>
                                ): (
                                    <Link to = '/contact-us' className="btn-link">
                                        <Button buttonStyle = "btn--outline" buttonSize = "btn--mobile" onClick = {closeMobileMenu}> 
                                            CONTACT US 
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>   
            </IconContext.Provider>
        </>
    )
}

export default Navbar
