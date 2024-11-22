import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './components/Contact'
import IconContact from './components/IconContact'

function App() {

  return (
    <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
    
      <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blog/:id' element={<Blog />} />
      </Routes>
      <IconContact />
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
