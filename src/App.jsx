import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MainComponents/Navbar'
import Home from './Pages/Home'
import Footer from './MainComponents/Footer'
import Detail from './Pages/Detail'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className='w-screen lg:w-[calc(100vw-17px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App