import React from 'react'
import Button from '@generics/Button'
import Article1 from '@images/article-1.jpg'
import Article2 from '@images/article-2.jpg'
import Article3 from '@images/article-3.jpg'
import Article4 from '@images/article-4.jpg'
import ProjectsDivs from '@homespecifics/ProjectsDivs'

const Projects = () => {
  return (
    <section className="projects-section">
        <div className="container">
            <div className="title-part">
                <p className="orange-p">Project & Case Studies</p>
                <h2>Let's Looks Our Global Projects</h2>
            </div>

            <div className="project-part">
                <ProjectsDivs img={Article1} alt="Mans hand holding a business paper" title="Grow your Business" />
                <ProjectsDivs img={Article2} alt="Pink electronic products" title="Why your clients needs a responsive website" />
                <ProjectsDivs img={Article3} alt="Notebook and coffee on desk" title="Educate your employees to get better results" />
                <ProjectsDivs img={Article4} alt="Open laptop with statistics" title="Business Insights is an important piece of your business" />
            </div>
            <div className="center-content">
                <Button color="btn-black" text="All Recent Projects" url="#" />
            </div>
        </div>
    </section>
  )
}

export default Projects