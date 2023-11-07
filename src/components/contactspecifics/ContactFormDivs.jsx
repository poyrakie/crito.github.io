import React from 'react'

const ContactFormDivs = ({icon, titel, link1, link2, text1, text2}) => {
  return (
    <div className="columns">
    <i className={icon}></i>
    <div>
        <h3>{titel}</h3>
        <a href={link1}>{text1}</a>
        <a href={link2}>{text2}</a>
    </div>
</div>
  )
}

export default ContactFormDivs