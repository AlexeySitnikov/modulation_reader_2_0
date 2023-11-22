import { useRef } from 'react'
import style from './style.module.css'

export function SetStep() {
  const inputRef = useRef(null)

  const onClickHandler = () => {

  }

  return (
    <>
      <input className={style.input} type="number" min={0} step={0.01} onChange={onClickHandler} value={0} ref={inputRef} lang="en-US" />
      <button className={style.button} type="button">
        {'Current step is '}
      </button>
    </>
  )
}
