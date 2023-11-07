import React from 'react'
import Button from '@generics/Button'
import SquigglyLines from '@images/services-lines.svg'
import ServicesDivs from './ServicesDivs'

const Services = () => {
  return (
    <section className="services-section">
        <img className="squiggly-lines" src={SquigglyLines} alt="squiggly lines" />
        <div className="container">
            <div>
                <p className="orange-p">
                    Our Services
                </p>
                <h2>
                    We Provide The Best<br></br>Service For Consulting
                </h2>
            </div>
            <div className="services-box">
                <ServicesDivs title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                <ServicesDivs title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                <ServicesDivs title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                <ServicesDivs title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
            </div>
            <div className="center-content"><Button color="btn-transparent" text="Browse Services" url="#" /></div>
        </div>
    </section>
  )
}

export default Services