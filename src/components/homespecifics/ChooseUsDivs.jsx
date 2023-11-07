import React from 'react'

const ChooseUsDivs = ({icon, title, text}) => {
  return (
    <div className="headlines">
        <i className={icon}></i>
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default ChooseUsDivs