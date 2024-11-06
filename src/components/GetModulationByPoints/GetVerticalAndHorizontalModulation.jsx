import { useState } from 'react'
import { isCeparatedCells } from '../constrains/isCeparatedCells'
import style from './style.module.css'
import { LinksToVerticalAndHorizontalModulation } from './LinksToVerticalAndHorizontalModulation'

export function GetVerticalAndHorizontalModulation({
  arrayOfStrings, step, dimension, separateEachCell, cellLength, setContent,
}) {
  const [windowHasFocus, setWindowHasFocus] = useState(true)

  const onClickButtonHandler = () => {
    setContent(<LinksToVerticalAndHorizontalModulation
      arrayOfStrings={arrayOfStrings}
      step={step}
      dimension={dimension}
      separateEachCell={separateEachCell}
      cellLength={cellLength}
      windowHasFocus={windowHasFocus}
    />)
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
