export function SetEachCellToZeroPoint({
  eachCellToZeroPoint, setEachCellToZeroPoint,
  separateEachCell,
}) {
  const onChangeButtonHandler = () => {
    setEachCellToZeroPoint(!eachCellToZeroPoint)
  }

  return (
    <legend hidden={((!separateEachCell))}>
      Set each cell to zero point?
      <div>
        <input
          type="checkbox"
          id="setEachCellToZeroPointId"
          name="setEachCellToZeroPointName"
          checked={eachCellToZeroPoint}
          onChange={onChangeButtonHandler}
        />
      </div>
    </legend>
  )
}
