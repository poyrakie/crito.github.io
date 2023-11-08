import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticle = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const results = await fetch(apiUrl)
        setArticles(await results.json())
    }
    const getArticle = async (id) => {
        const results = await fetch(`${apiUrl}/${id}`)

        if (results.status === 200)
            setArticle(await results.json())
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticles, getArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}
