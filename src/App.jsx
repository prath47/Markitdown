import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/monaco-editor' element={<EditorPage />} />
    </Routes>
  )
}

export default App
