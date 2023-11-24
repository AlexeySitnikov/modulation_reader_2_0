import style from './style.module.css'

export function SingleRow({ row, setChecked, deleteChecked }) {
  const onClickButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setChecked(row.id)
    deleteChecked()
  }
  return (
    <div>
      {/* <input
      type="checkbox"
      checked={row.checked}
      key={crypto.randomUUID()}
      onChange={onClickHandler} />
      {row.element} */}
      <button type="button" onClick={onClickButtonHandler} className={style.deleteButton}>X</button>
      {row.element}
    </div>
  )
}
