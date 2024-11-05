import { Download } from '../Dowload/Download'
import style from './style.module.css'

export function GetModulation({ modulation, name }) {
  const onClickButtonHandler = () => {
    Download(modulation, `${name}.txt`)
  }
  return (
    <button className={style.button} type="button" onClick={onClickButtonHandler}>
      Get
      {' '}
      {name}
      {' '}
      modulation
    </button>
  )
}
