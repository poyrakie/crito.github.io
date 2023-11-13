import React from 'react'
import { useArticle } from '../../context/ArticleContext'
import { Link } from 'react-router-dom'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NewsDetailArticleSection = () => {
    const { articles } = useArticle()

    const getMonth = (e) => {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return month[e-1]
    }

    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
  return (
    <section className="news-detail-article-section">

        <div className="container">
            <p className="orange-p">Article & News</p>
            <div className="titel-box">
                <h2>Get Every Single Articles & News</h2>
                <Link to="/news" className="btn-transparent">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>

            <div className="article-box">
                <Carousel responsive={responsive}
                showDots={true}
                infinite={true}
                dotListClass="custom-dot-list-style"
                renderDotsOutside={true}
                >
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
                </Carousel>

            </div>
        </div>
    </section>
  )
}

export default NewsDetailArticleSection