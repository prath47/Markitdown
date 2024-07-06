import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TopsectionContextProvider } from './contexts/TopsectionContext.jsx'
import { BottomsectionContextProvider } from './contexts/BottomsectionContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BottomsectionContextProvider>
      <TopsectionContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TopsectionContextProvider>
    </BottomsectionContextProvider>
  </React.StrictMode>,
)
