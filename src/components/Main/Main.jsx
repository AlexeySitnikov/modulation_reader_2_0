import { useDownloadFile } from '../CustomHooks/useDownloadFile'
import { SingleRow } from '../ListOfStrings/SingleRow'

export function Main({ selectedFile }) {
  const {
    arrayOfStrings, setChecked, setCheckAllRows, setUnCheckAllRows, deleteChecked,
  } = useDownloadFile({ selectedFile })

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

  return (
    <div>
      <div>
        <input type="checkbox" id="checkAllRows" onClick={onClickCheckAllRows} />
        <span>Check all rows</span>
      </div>
      <button type="button" onClick={onDeleteButtonHandler}>Delete checked</button>
      {arrayOfStrings.map((row) => (
        <SingleRow key={crypto.randomUUID()} row={row} setChecked={setChecked} />
      ))}
    </div>
  )
}
