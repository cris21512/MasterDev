import React, { useEffect, useState } from 'react'
import './App.css'

import Home from './Views/Home/Home'
import About from './Views/About/About'
import Tools from './Views/Tools/Tools'
import Projects from './Views/Projects/Projects'
import Footer from './Views/Footer/Footer'

import AboutPage from './Pages/AboutPage/AboutPage'
import ProjectsPage from './Pages/Projects/ProjectsPage'
import ContactPage from './Pages/ContactPage/ContactPage'

import Page404 from './Pages/404/404'

export function navigate(href) {
  window.history.pushState({}, '', href)
  const navEvent = new Event('pushstate')
  window.dispatchEvent(navEvent)
  window.scrollTo(0, 0)
}

function App_one() {
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

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('pushstate', onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('pushstate', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <App_one />}
      {currentPath === '/about' && <AboutPage />}
      {currentPath === '/projects' && <ProjectsPage />}
      {currentPath === '/contact' && <ContactPage />}
      defaultComponent= {<Page404 />}
    </main>
  )
}


export default App
