import React from 'react'
import Squigglylines from '@images/showcase-lines.svg'
import { NavLink } from 'react-router-dom'

const Showcase = () => {
  return (
    <section className="news-showcase">
        <img className="squiggly-lines" src={Squigglylines} alt="squiggly lines" />
        <div className="container">
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/news">News</NavLink>
            </div>
            <h1>
                News & Articles
            </h1>
        </div>
    </section>
  )
}

export default Showcase