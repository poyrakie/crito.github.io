import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@views/Home'
import Contact from '@views/Contact'
import News from '@views/News'
import NewsDetails from '@views/NewsDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path="/news" element= {<News />} />
        <Route path="/newsdetails" element= {<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
