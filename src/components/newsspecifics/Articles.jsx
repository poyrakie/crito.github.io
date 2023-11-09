import React, { useEffect, useState } from 'react'
import { useArticle } from '../../context/ArticleContext'
import { Link } from 'react-router-dom'
import PageScroller from './PageScroller'

const Articles = () => {
    const { articles } = useArticle()

    const getMonth = (e) => {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return month[e-1]
    }

  return (
    <div className="container articles-container">
        <h2>Our News & Articles</h2>
        <div className="article-section">
            {
                articles.map(article => (
                    <Link to={`/news/${article.id}`} className="article-item" key={article.id}> 
                        <img src={article.imageUrl} />
                        <div className="absolute-date">
                            <h3>{article.published.slice(8, 10)}</h3>
                            <p>{getMonth(article.published.slice(5,7))}</p>
                        </div>
                        <p>{article.category}</p>
                        <h3>{article.author}</h3>
                        <p>{article.content}</p>
                    </Link>
                ))
            }
        </div>
        <div className="page-scroller">
            <PageScroller number={<i className="fa-solid fa-angle-left"></i>} />
            <a className="page-scroller-item current">
                1
            </a>
            <PageScroller number="2" />
            <PageScroller number="3" />
            <PageScroller number="..." />
            <PageScroller number="9" />
            <PageScroller number={<i className="fa-solid fa-angle-right"></i>} />
        </div>
    </div>
  )
}

export default Articles