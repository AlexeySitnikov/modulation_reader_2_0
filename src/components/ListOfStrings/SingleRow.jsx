export function SingleRow({ row, setChecked }) {
  const onClickHandler = () => {
    setChecked(row.id)
  }
  return (
    <div>
      <input type="checkbox" checked={row.checked} key={crypto.randomUUID()} onChange={onClickHandler} />
      {row.element}
    </div>
  )
}
