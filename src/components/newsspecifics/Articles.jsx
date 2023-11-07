import React, { useEffect, useState } from 'react'

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {

        const results = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await results.json())
        console.log(articles)
    }
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
                    <div className="article-item" key={article.id}> 
                        <img src={article.imageUrl} />
                        <div className="absolute-date">
                            <h3>{getMonth(article.published.slice(5,7))}</h3>
                            <p>{article.published.slice(8, 10)}</p>
                        </div>
                        <p>{article.category}</p>
                        <h3>{article.author}</h3>
                        <p>{article.content}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Articles