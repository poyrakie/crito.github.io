import React from 'react'

const MeetUsDivs = ({img, alt, name, title}) => {
  return (
    <div>
        <img src={img} alt={alt} />
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default MeetUsDivs