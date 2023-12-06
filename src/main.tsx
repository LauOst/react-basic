import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// icon
import 'virtual:svg-icons-register'

// i18n
import './locales/i18n'

// tailwind css
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense>
    <App />
  </Suspense>,
)
