import { useEffect, useState } from 'react'

export const useRows = ({ selectedFile }) => {
  const [arrayOfStrings, setArrayOfStrings] = useState([])
  const [arrayOfDeletedStrings, setArrayOfDeletedStrings] = useState([])

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

  const setChecked = (id) => {
    setArrayOfStrings((element) => element.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          checked: !el.checked,
        }
      }
      return el
    }))
  }

  const addToUndoList = (el) => {
    setArrayOfDeletedStrings([el, ...arrayOfDeletedStrings])
  }

  const deleteChecked = () => {
    setArrayOfStrings((element) => element.filter((el, index) => {
      if (el.checked) {
        addToUndoList(el, index)
        return false
      }
      return el
    }))
  }

  const setCheckAllRows = () => {
    setArrayOfStrings((element) => element.map((el) => ({
      ...el,
      checked: true,
    })))
  }

  const setUnCheckAllRows = () => {
    setArrayOfStrings((element) => element.map((el) => ({
      ...el,
      checked: false,
    })))
  }

  const undoDeletedStrings = () => {
    if (arrayOfDeletedStrings.length) {
      setArrayOfStrings([arrayOfDeletedStrings[0], ...arrayOfStrings])
    }
  }

  const onClickCheckAllRows = (e) => {
    e.stopPropagation()
    if (e.target.checked) {
      setCheckAllRows()
    } else {
      setUnCheckAllRows()
    }
  }

  const onDeleteButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    deleteChecked()
  }

  const onClickUndoButton = (e) => {
    e.preventDefault()
    e.stopPropagation()
    undoDeletedStrings()
  }

  return {
    arrayOfStrings,
    setChecked,
    deleteChecked,
    setCheckAllRows,
    setUnCheckAllRows,
    onClickCheckAllRows,
    onDeleteButtonHandler,
    undoDeletedStrings,
    onClickUndoButton,
  }
}
