import { useEffect, useState } from 'react'

export const useDownloadFile = ({ selectedFile }) => {
  const [arrayOfStrings, setArrayOfStrings] = useState([])

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
          .map((element) => (
            {
              element,
              checked: false,
              id: crypto.randomUUID(),
            }
          )))
      }
    }
  }, [selectedFile])

  const setChecked = (id) => {
    setArrayOfStrings((prev) => prev.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          checked: !el.checked,
        }
      }
      return el
    }))
  }

  const deleteChecked = () => {
    setArrayOfStrings((prev) => prev.filter((el) => !el.checked))
  }

  const setCheckAllRows = () => {
    setArrayOfStrings((prev) => prev.map((el) => ({
      ...el,
      checked: true,
    })))
  }

  const setUnCheckAllRows = () => {
    setArrayOfStrings((prev) => prev.map((el) => ({
      ...el,
      checked: false,
    })))
  }

  return {
    arrayOfStrings, setChecked, deleteChecked, setCheckAllRows, setUnCheckAllRows,
  }
}
