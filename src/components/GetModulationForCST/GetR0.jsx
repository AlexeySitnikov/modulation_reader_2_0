import { Download } from '../Dowload/Download'
import { Radius } from '../ModulationForCST/Radius'
import style from './style.module.css'

export function GetR0({ arrayOfStrings }) {
  const downloadR0 = () => {
    if (Radius({ arrayOfStrings })) {
      Download(Radius({ arrayOfStrings }), 'R.txt')
    }
  }

  return (
    <button className={style.button} type="button" onClick={downloadR0}>
      Download R
    </button>
  )
}
