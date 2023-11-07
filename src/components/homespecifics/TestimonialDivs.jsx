import React from 'react'

const TestimonialDivs = ({text, img, alt, name, title}) => {
  return (
    <div className="content-box">
        <div className="stars">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <p className="review-text">
            {text}
        </p>
        <div className="reviewer">
            <img src={img} alt={alt} />
            <div>
                <h3>{name}</h3>
                <p className="orange-p">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialDivs