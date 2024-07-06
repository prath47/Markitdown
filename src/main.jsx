import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TopsectionContextProvider } from './contexts/TopsectionContext.jsx'
import { BottomsectionContextProvider } from './contexts/BottomsectionContex.jsx'
import { EditorContextProvider } from './contexts/EditorContext.jsx'
import { SelectedSectionContextProvider } from './contexts/SelectedSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SelectedSectionContextProvider>
      <BottomsectionContextProvider>
        <TopsectionContextProvider>
          <EditorContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </EditorContextProvider>
        </TopsectionContextProvider>
      </BottomsectionContextProvider>
    </SelectedSectionContextProvider>
  </React.StrictMode>,
)
