import { useState } from 'react'
import './App.css'

import Home from './Views/Home/Home'
import About from './Views/About/About'
import Tools from './Views/Tools/Tools'
import Projects from './Views/Projects/Projects'
import Footer from './Views/Footer/Footer'

function App() {

  return (
    <>
      <Home />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </>
  )
}

export default App
