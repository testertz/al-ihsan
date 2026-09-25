import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from '@/context/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider>
        <BrowserRouter>
          <App />
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
