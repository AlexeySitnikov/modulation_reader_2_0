import { useEffect, useState } from 'react'

export const useRows = ({ selectedFile }) => {
  const [arrayOfStrings, setArrayOfStrings] = useState([])
  const [undoArrayOfStrings, setUndoArrayOfString] = useState([])

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader()
      reader.readAsText(selectedFile)
      reader.onload = () => {
        setArrayOfStrings(reader.result
          .replace(/[-]/g, '')
          .split('\n')
          .map((el) => el.trim())
          .map((el) => el.replace(/\s\s+/g, ' '))
          .filter((el) => el.length > 0)
          .map((element, index) => (
            {
              element,
              checked: false,
              id: crypto.randomUUID(),
              index,
            }
          )))
      }
    }
  }, [selectedFile])

  const deleteString = (id) => {
    setArrayOfStrings((element) => element.filter((el) => (el.id !== id)))
    setUndoArrayOfString((prev) => ([arrayOfStrings.find((a) => (a.id === id)), ...prev]))
  }

  const onClickUndoButton = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const firstElement = undoArrayOfStrings[0]
    if (undoArrayOfStrings.length > 0) {
      const foundIndex = arrayOfStrings.findIndex((element) => (
        element.index === firstElement.index + 1
      ))
      if (foundIndex > -1) {
        setArrayOfStrings([...arrayOfStrings.toSpliced(foundIndex, 0, firstElement)])
        setUndoArrayOfString([...undoArrayOfStrings.toSpliced(0, 1)])
      }
    }
  }

  return {
    arrayOfStrings,
    onClickUndoButton,
    deleteString,
  }
}
