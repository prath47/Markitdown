import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
import { useContext, useEffect } from 'react'
import { SelectedSectionContext } from './contexts/SelectedSection'


function App() {
  const { selectedValue, setSelectedValue } = useContext(SelectedSectionContext)
  useEffect(()=>{},[selectedValue])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/monaco-editor' element={<EditorPage />} />
    </Routes>
  )
}

export default App
