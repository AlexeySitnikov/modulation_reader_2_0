import { Download } from '../Dowload/Download'
import { Radius } from '../ModulationForCST/Radius'
import style from './style.module.css'

export function GetR0({ arrayOfStrings }) {
  return (
    <button className={style.button} type="button" onClick={() => { Download(Radius({ arrayOfStrings }), 'R.txt') }}>
      Download R
    </button>
  )
}
