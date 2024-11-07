import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MainComponents/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className='w-screen box-border lg:w-[calc(100vw-17px)] '>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App