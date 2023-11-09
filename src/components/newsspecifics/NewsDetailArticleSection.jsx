import React from 'react'
import { useArticle } from '../../context/ArticleContext'
import { Link } from 'react-router-dom'
import Button from '@generics/Button'

const NewsDetailArticleSection = () => {
    const { articles } = useArticle()

    const getMonth = (e) => {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return month[e-1]
      }
  return (
    <section className="news-detail-article-section">

        <div className="container">
            <p className="orange-p">Article & News</p>
            <div className="titel-box">
                <h2>Get Every Single Articles & News</h2>
                <Link to="/news" className="btn-transparent btn-login">Browse Articles</Link>
            </div>

            <div className="article-box">
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
        </div>
    </section>
  )
}

export default NewsDetailArticleSection