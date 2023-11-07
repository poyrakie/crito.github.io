import React from 'react'
import Button from '@generics/Button'
import SquigglyLines from '@images/showcase-lines.svg'
import ImageShowcase from '@images/image-showcase.png'

const ShowcaseHome = () => {
  return (
    <section className="showcase-section">
        <img className="squiggly-lines" src={SquigglyLines} alt="squiggly lines" />
            <div className="container">
                <div className="content">
                    <h1>
                        We Provide The Best Business Solutions
                    </h1>
                    <p>
                        Establish your vision and value proposition and turn them into testable prototypes.
                    </p>
                <Button color="btn-yellow" text="Get Consulting" url="#" />
                <Button color="btn-transparent" text="Learn More" url="#" />
            </div>
            <img src={ImageShowcase} alt="image of a thinking man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default ShowcaseHome