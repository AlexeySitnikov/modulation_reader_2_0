import './App.css'
import { useState } from 'react'
import style from './style.module.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  if (selectedFile) {
    return (
      <div className={style.mainPage}>
        <Header setSelectedFile={setSelectedFile} />
        <Main selectedFile={selectedFile} />
      </div>
    )
  }

  return (
    <div className={style.donloadOnlyPage}>
      <Header setSelectedFile={setSelectedFile} />
    </div>
  )
}

export default App
