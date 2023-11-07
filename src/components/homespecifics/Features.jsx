import React from 'react'
import FeatureDivs from './FeatureDivs'
import LogoPaperz from '@images/logo-paperz.svg'
import LogoDorfus from '@images/logo-dorfus.svg'
import LogoMartino from '@images/logo-martino.svg'
import LogoSquare from '@images/logo-square.svg'
import LogoGobona from '@images/logo-gobona.svg'
import Button from '@generics/Button'

const Features = () => {
  return (
    <section className="features-section" id="features-section">
        <div className="container">
            <div className="partners">
                <a href="#"><img src={LogoPaperz} alt="Paperz logo" /></a>
                <a href="#"><img src={LogoDorfus} alt="Dorfus logo" /></a>
                <a href="#"><img src={LogoMartino} alt="Martino logo" /></a>
                <a className="show" href="#"><img src={LogoSquare} alt="Square logo" /></a>
                <a className="show" href="#"><img src={LogoGobona} alt="Gobona logo" /></a>
            </div>
            <div className="hidden">
                <a href="#"><img src={LogoSquare} alt="Square logo" /></a>
                <a href="#"><img src={LogoGobona} alt="Gobona logo" /></a>
            </div>
            <div className="features">
                <div className="part-one">
                    <p className="orange-p">Features</p>
                    <h2>
                        Our accounting is trusted by thousands of companies
                    </h2>
                    <Button color="btn-yellow" text="Learn More" url="#" />
                </div>
                <div className="part-two">
                    <div>
                        <FeatureDivs icon="fa-regular fa-handshake" title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                        <FeatureDivs icon="fa-regular fa-chart-mixed-up-circle-dollar" title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>
                    <div className="icons-right">
                        <FeatureDivs icon="fa-regular fa-lightbulb-on" title="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                        <FeatureDivs icon="fa-regular fa-box-circle-check" title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features