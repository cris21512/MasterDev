import { useState } from 'react'
import './App.css'

import Home from './Views/Home/Home'
import About from './Views/About/About'
import Tools from './Views/Tools/Tools'
import Projects from './Views/Projects/Projects'

function App() {

  return (
    <>
      <Home />
      <About />
      <Tools />
      <Projects />
    </>
  )
}

export default App
