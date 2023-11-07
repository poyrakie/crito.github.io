import React from 'react'
import Button from '@generics/Button'
import Mars25 from '@images/25mars.png'
import Mars17 from '@images/17mars.png'
import Mars13 from '@images/13mars.png'
import ArticlesDivs from '@homespecifics/ArticlesDivs'

const Articles = () => {
  return (
    <section className="article-section">
        <div className="container">
            <div className="part-one">
                <div>
                    <p className="orange-p">Articles & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <Button color="btn-transparent" text="Browse Teams" url="#" />
            </div>
            <div className="part-two">
                <ArticlesDivs img={Mars25} alt="Woman sitting in a classroom smiling" title="How To Use Digitalization In The Classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." date="25" />
                <ArticlesDivs img={Mars17} alt="Picture taken at an angle at a screen with business information" title="How To Implement Chat Got In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." date="17" />
                <ArticlesDivs img={Mars13} alt="A phone laying on two stacked books" title="The Guide To Support Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." date="13" />
            </div>
            <div className="round-buttons">
                <a className="active" href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Articles