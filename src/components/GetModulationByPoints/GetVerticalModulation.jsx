import { useState } from 'react'
import { Download } from '../Dowload/Download'
import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
import { downloadEachCell } from '../constrains/downloadEachCell'
import { selectClassName } from '../constrains/selectClassName'
import { isCeparatedCells } from '../constrains/isCeparatedCells'

export function GetVerticalModulation({
  arrayOfStrings, step, dimension, separateEachCell, cellLength,
}) {
  const [windowHasFocus, setWindowHasFocus] = useState(true)

  const onClickButtonHandler = () => {
    const verticalModulation = VerticalModulation({ arrayOfStrings, step, dimension })
    if (verticalModulation) {
      if (!separateEachCell) {
        Download(verticalModulation, 'vertical.txt')
      } else {
        downloadEachCell({
          verticalModulation, cellLength, windowHasFocus, step,
        })
      }
    }
  }

  const windowHasFocusHandler = () => {
    setWindowHasFocus(true)
  }

  const windowHasBlurHandler = () => {
    setWindowHasFocus(false)
  }

  window.addEventListener('focus', windowHasFocusHandler)
  window.addEventListener('blur', windowHasBlurHandler)

  return (
    <button
      className={selectClassName({ separateEachCell, cellLength })}
      type="button"
      onClick={onClickButtonHandler}
      disabled={isCeparatedCells({ separateEachCell, cellLength })}
    >
      Get vertical modulation
    </button>
  )
}
