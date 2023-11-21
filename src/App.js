import './App.css'
import { useState } from 'react'
import { DownloadFile } from './components/DownloadFile/DownloadFile'
// import { useDownloadFile } from './components/CustomHooks/useDownloadFile'
import { Main } from './components/Main/Main'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  // const { arrayOfStrings } = useDownloadFile(selectedFile)

  // useEffect(() => {
  //   let arrayOfStrings = []
  //   if (selectedFile) {
  //     const reader = new FileReader()
  //     reader.readAsText(selectedFile)
  //     reader.onload = () => {
  //       arrayOfStrings = reader.result
  //         .replace(/[-]/g, '')
  //         .split('\n')
  //         .map((el) => el.trim())
  //         .map((el) => el.replace(/\s\s+/g, ' '))
  //       console.log(arrayOfStrings)
  //     }
  //   }
  // }, [selectedFile])
  if (selectedFile) {
    return (
      <>
        <DownloadFile setSelectedFile={setSelectedFile} />
        <Main selectedFile={selectedFile} />
      </>
    )
  }

  return (
    <div>
      <DownloadFile setSelectedFile={setSelectedFile} />
    </div>
  )
}

export default App
