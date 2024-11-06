import { Download } from '../Dowload/Download'
import style from './style.module.css'

export function GetModulation({ modulation, name, fileName }) {
  const onClickButtonHandler = () => {
    Download(modulation, `${fileName}.txt`)
  }
  return (
    <button className={style.button} type="button" onClick={onClickButtonHandler}>{`Get ${name} modulation`}</button>
  )
}
