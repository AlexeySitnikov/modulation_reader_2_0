import style from './style.module.css'
import { Modulation } from '../ModulationForCST/Modulation'
import { Download } from '../Dowload/Download'

export function GetM({ arrayOfStrings }) {
  const downloadM = () => {
    if (Modulation({ arrayOfStrings })) {
      Download(Modulation({ arrayOfStrings }), 'm.txt')
    }
  }

  return (
    <button className={style.button} type="button" onClick={downloadM}>
      Download m
    </button>
  )
}
