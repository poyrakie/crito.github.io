import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@views/Home'
import Contact from '@views/Contact'
import News from '@views/News'
import NewsDetails from '@views/NewsDetails'
import { ArticleProvider } from './context/ArticleContext'

function App() {

  return (
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/news" element= {<News />} />
          <Route path="/news/:id" element= {<NewsDetails />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  )
}

export default App
