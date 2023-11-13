import React from 'react'
import FourOFour from '@images/404.jpg'
import { Link } from 'react-router-dom'


function NotFoundMain() {
  return (
    <section className="not-found-section">
        <img src={FourOFour} alt="404" />
        <div className="container">
            <h1>The Page You Are Looking For Couldn't Be Found</h1>
            <Link to={"/"} className="btn " >Return to Home</Link>

        </div>
    </section>
  )
}

export default NotFoundMain