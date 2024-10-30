import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './MainComponents/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
