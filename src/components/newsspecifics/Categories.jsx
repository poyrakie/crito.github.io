import React from 'react'

const Categories = ({category, posts}) => {
  return (
    <>
        <div className="flex-text">
            <h5>
                {category} -
            </h5>
            <p>
                {posts} Posts
            </p>
        </div>
    </>
  )
}

export default Categories