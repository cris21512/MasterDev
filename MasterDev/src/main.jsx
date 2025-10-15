import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactLenis from 'lenis/react'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: t => 1 - Math.pow(1 - t, 3),
        smoothTouch: true
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>
)
