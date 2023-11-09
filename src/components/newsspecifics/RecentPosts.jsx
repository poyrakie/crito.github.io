import React from 'react'

const RecentPosts = ({title, date}) => {
  return (
    <>
        <h5>{title}</h5>
        <p>{date}</p>
    </>
  )
}

export default RecentPosts