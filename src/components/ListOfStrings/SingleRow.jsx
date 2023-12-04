import style from './style.module.css'

export function SingleRow({
  row,
  deleteString,
}) {
  const onClickButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    deleteString(row.id)
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
