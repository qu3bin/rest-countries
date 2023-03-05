import React from 'react'
import './reset.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Theme from "./components/Theme"
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  
  return (
    <>
      <header>
        <h1 className="title">Where in the world?</h1>
        <Theme />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App