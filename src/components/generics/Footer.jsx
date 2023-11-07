import React from 'react'
import Squigglylines from '../../assets/images/footer-lines.svg'
import Logo from '../../assets/images/logo-white-text.svg'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <section className="top-footer">
            <img className="squiggly-lines" src={Squigglylines} alt="squiggly lines" />
            <div className="container footer-menu">
                <div>
                    <HashLink smooth to="/#top"><img src={Logo} alt="crito logotype" /></HashLink>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <button className="menu-bars"><i className="menu-bars fa-solid fa-bars-staggered"></i></button>
                <div className="link-list">
                    <h3>Company</h3>
                    <HashLink to="/#about-section">About</HashLink>
                    <HashLink to="/#features-section">Features</HashLink>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Works</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Career</Link>
                </div>
                <div className="link-list">
                    <h3>Help</h3>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Customer Support</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Delivery Details</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Terms & Conditions</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Privacy Policy</Link>
                </div>
                <div className="link-list">
                    <h3>Resources</h3>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Free eBooks</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Development Tutorial</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">How to - Blog</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Youtube Playlist</Link>
                </div>
                <div className="link-list">
                    <h3>Link</h3>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Free eBooks</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Development Tutorial</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">How to - Blog</Link>
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Youtube Playlist</Link>
                </div>
            </div>
        </section>

        <div className="footer-border"></div>
        <section className="container bot-footer">
            <p>
                &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </p>
            <div className="social-media">
                <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
        </section>
    </footer>
  )
}

export default Footer