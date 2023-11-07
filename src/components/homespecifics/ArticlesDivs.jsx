import React from 'react'

const ArticlesDivs = ({img, alt, title, text, date}) => {
  return (
    <a href="#">
      <img className="transition" src={img} alt={alt} />
      <p className="business-color">Business</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="absolute-date">
        <h3>{date}</h3>
        <p>Mar</p>
      </div>
    </a>
  )
}

export default ArticlesDivs