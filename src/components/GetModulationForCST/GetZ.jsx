import { Download } from '../Dowload/Download'
import { ZLength } from '../ModulationForCST/ZLength'
import style from './style.module.css'

export function GetZ({ arrayOfStrings }) {
  const downloadZ = () => {
    if (ZLength({ arrayOfStrings })) {
      Download(ZLength({ arrayOfStrings }), 'Z.txt')
    }
  }

  return (
    <button className={style.button} type="button" onClick={downloadZ}>
      Download Z
    </button>
  )
}
