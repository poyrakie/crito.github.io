import React from 'react'
import Button from '@generics/Button'
import Logo from '@images/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <header>
        <div className="container">
            <NavLink to="/"><img src={Logo} alt="crito logotype" /></NavLink>
            <button className="menu-bars"><i className="menu-bars fa-solid fa-bars-staggered"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <Link to="tel:+46812147050"> <i className="fa-regular fa-phone-volume"></i>+46 (8) 121 470 50</Link>
                        </div>
                        <div className="content-box">
                            <Link to="mailto:info@crito.com"><i className="fa-regular fa-envelope"></i>info@crito.com</Link>
                        </div>
                        <div className="content-box last">
                            <HashLink smooth to="/contact/#contact-map"><i className="fa-sharp fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM </HashLink>
                        </div>
                    </div>
                    <div className="social-media">
                        <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink to="/" alt="">Home</NavLink>
                        <NavLink to="/service" alt="">Service</NavLink>
                        <NavLink to="/news" alt="">News</NavLink>
                        <NavLink to="/contact" alt="">Contact</NavLink>
                    </nav>
                    <Button color="btn-yellow btn-login" text="Login" url="#" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header