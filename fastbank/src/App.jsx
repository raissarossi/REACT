import { useState } from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Header/Navbar'
import Forms from './components/Header/enter/forms'
import { Router } from 'react-router-dom'

function App() {

  return (
    <div className='bg-white dark:bg-black h-screen'>
      <Forms />
      <Navbar />
    </div>
  )
}

export default App

