import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { initAnalytics } from './lib/analytics.ts'

initAnalytics()

const rootElement = document.getElementById('root')!
const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)

// Bilinen route'lar build sırasında statik olarak ön render edilir
// (bkz. entry-server.tsx, prerender.mjs) ve #root zaten dolu gelir —
// bu durumda hydrateRoot ile devralınır. Henüz ön render edilmemiş bir
// path (örn. SPA fallback ile ulaşılan bir rota) için #root boştur ve
// normal client-only render'a geri düşülür.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
