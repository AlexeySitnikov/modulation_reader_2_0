import './App.css'
import { useState } from 'react'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  if (selectedFile) {
    return (
      <>
        <Header setSelectedFile={setSelectedFile} />
        <Main selectedFile={selectedFile} />
      </>
    )
  }

  return (
    <div>
      <Header setSelectedFile={setSelectedFile} />
    </div>
  )
}

export default App
