export function SeparateEachCell({ separateEachCell, setSeparateEachCell, setCellLength }) {
  const onChangeButtonHandler = () => {
    setSeparateEachCell(!separateEachCell)
  }

  const onChangeCellLengthButtonHandler = (e) => {
    setCellLength(e.target.value)
  }

  return (
    <legend>
      Separate each cell?
      <div>
        <input
          type="checkbox"
          id="separateEachCellId"
          name="separateEachCellName"
          checked={separateEachCell}
          onChange={onChangeButtonHandler}
        />
        <label htmlFor="separateEachCellId">{!separateEachCell ? 'No' : 'Yes'}</label>
        <input
          type="number"
          placeholder="Cell length, mm"
          step="0.01"
          min="0"
          disabled={!separateEachCell}
          onChange={onChangeCellLengthButtonHandler}
        />
      </div>
    </legend>
  )
}
