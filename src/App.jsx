import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
import { useContext, useEffect } from 'react'
import { SelectedSectionContext } from './contexts/SelectedSection'
import SimpleEditor from './pages/SimpleEditor'


function App() {
  const { selectedValue, setSelectedValue } = useContext(SelectedSectionContext)
  useEffect(()=>{},[selectedValue])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/monaco-editor' element={<EditorPage />} />
      <Route path='/simple-editor' element={<SimpleEditor />} />
    </Routes>
  )
}

export default App
