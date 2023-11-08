import React, { useEffect } from 'react'
import Header from '@generics/Header'
import Footer from '@generics/Footer'
import Showcase from '@newsspecifics/Showcase'
import { useParams } from 'react-router-dom'
import { useArticle } from '../context/ArticleContext'


const NewsDetails = () => {
  const { id } = useParams()
  const { article, getArticle } = useArticle()
  console.log(id)
  useEffect(() => {
    getArticle(id)
  }, [])
  const getMonth = (e) => {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return month[e-1]
  }



  return (
    <>
        <Header />
        <main>
            <Showcase />
            <section className="article-details-section container">
              <div className="article">
                <h2>{article.title}</h2>
                <div className="info-box">
                  <p>{getMonth(article.published.slice(5,7))} {article.published.slice(8,10)}, {article.published.slice(0,4)}</p>
                  <i class="fa-solid fa-circle dot"></i>
                  <p>{article.category}</p>
                  <i class="fa-solid fa-circle dot"></i>
                  <p>{article.author}</p>
                </div>
                <img src={article.imageUrl} />
                <div>
                  <p>{article.content}</p>
                </div>
              </div>
              <div>

              </div>

            </section>
            <section>
              <div className="container">
                
              </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default NewsDetails
