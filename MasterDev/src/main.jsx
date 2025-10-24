import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import ReactLenis from 'lenis/react'
import 'lenis/dist/lenis.css'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './Locales/es/global.json'
import global_en from './Locales/en/global.json'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en", // default language
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  </StrictMode>
)
