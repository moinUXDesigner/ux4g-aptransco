import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'ux4g-web-components/styles.css'
import 'ux4g-web-components/design-system'
import './theme.css'
import './icons.css'
import './index.css'
import App from './App.jsx'

document.documentElement.setAttribute('lang', 'en')
document.documentElement.setAttribute('data-theme', 'light')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
