import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TopsectionContextProvider } from './contexts/TopsectionContext.jsx'
import { BottomsectionContextProvider } from './contexts/BottomsectionContex.jsx'
import { EditorContextProvider } from './contexts/EditorContext.jsx'
import { SelectedSectionContextProvider } from './contexts/SelectedSection.jsx'
import { CurrentObjectContextProvider } from './contexts/CurrentObjectContext.jsx'
import { TemplateContextProvider } from './contexts/TemplateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemplateContextProvider>
      <SelectedSectionContextProvider>
        <BottomsectionContextProvider>
          <TopsectionContextProvider>
            <EditorContextProvider>
              <CurrentObjectContextProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </CurrentObjectContextProvider>
            </EditorContextProvider>
          </TopsectionContextProvider>
        </BottomsectionContextProvider>
      </SelectedSectionContextProvider>
    </TemplateContextProvider>
  </React.StrictMode>,
)
