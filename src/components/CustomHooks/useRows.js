/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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

  // const setChecked = (id) => {
  //   setArrayOfStrings((element) => element.map((el) => {
  //     if (el.id === id) {
  //       return {
  //         ...el,
  //         checked: !el.checked,
  //       }
  //     }
  //     return el
  //   }))
  // }

  const deleteString = (id) => {
    setArrayOfStrings((element) => element.filter((el) => {
      if (el.id !== id) {
        return el
      }
      if (el.id === id) {
        console.log(el)
        // undoArrayOfStrings((prev) => [...prev, el])
      }
    }))
  }

  const onClickUndoButton = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return {
    arrayOfStrings,
    onClickUndoButton,
    deleteString,
    undoArrayOfStrings,
    setUndoArrayOfString,
  }
}
