import { useState } from 'react'
// import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
// import { Download } from '../Dowload/Download'
// import { downloadEachCell } from '../constrains/downloadEachCell'
// import { selectClassName } from '../constrains/selectClassName'
import { isCeparatedCells } from '../constrains/isCeparatedCells'
// import { HorizontalModulation } from '../ModulationByPoints/HorizontalModulation'
import { downloadModulation } from '../constrains/downloadModulation'
import style from './style.module.css'

export function GetVerticalAndHorizontalModulation({
  arrayOfStrings, step, dimension, separateEachCell, cellLength,
}) {
  const [windowHasFocus, setWindowHasFocus] = useState(true)

  const onClickButtonHandler = () => {
    downloadModulation({
      arrayOfStrings, step, dimension, cellLength, windowHasFocus, separateEachCell,
    })
    // const verticalModulation = VerticalModulation({ arrayOfStrings, step, dimension })
    // if (verticalModulation) {
    //   if (!separateEachCell) {
    //     Download(verticalModulation, 'vertical.txt')
    //   } else {
    //     downloadEachCell({
    //       modulation: verticalModulation,
    // cellLength, windowHasFocus, step, verticalOrHorizontal: 'vertical',
    //     })
    //   }
    // }
    // const horizontalModulation = HorizontalModulation({ arrayOfStrings, step, dimension })
    // if (horizontalModulation) {
    //   if (!separateEachCell) {
    //     Download(horizontalModulation, 'horizontal.txt')
    //   } else {
    //     downloadEachCell({
    //       modulation: horizontalModulation,
    // cellLength, windowHasFocus, step, verticalOrHorizontal: 'horizontal',
    //     })
    //   }
    // }
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
      className={isCeparatedCells({ separateEachCell, cellLength }) ? `${style.button} ${style.disabledButton}` : `${style.button}`}
      type="button"
      onClick={onClickButtonHandler}
      disabled={isCeparatedCells({ separateEachCell, cellLength })}
    >
      Get modulation
    </button>
  )
}
