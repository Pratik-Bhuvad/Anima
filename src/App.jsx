import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MainComponents/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='mt-[4.5rem] box-border h-[500vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
