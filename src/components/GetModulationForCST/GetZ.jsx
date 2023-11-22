import { Download } from '../Dowload/Download'
import { ZLength } from '../ModulationForCST/ZLength'
import style from './style.module.css'

export function GetZ({ arrayOfStrings }) {
  return (
    <button className={style.button} type="button" onClick={() => { Download(ZLength({ arrayOfStrings }), 'Z.txt') }}>
      Download Z
    </button>
  )
}
