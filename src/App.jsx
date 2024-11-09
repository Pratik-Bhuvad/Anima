import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MainComponents/Navbar'
import Home from './Pages/Home'
import Footer from './MainComponents/Footer'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className='w-screen lg:w-[calc(100vw-17px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App