import style from './style.module.css'
import { Modulation } from '../ModulationForCST/Modulation'
import { Download } from '../Dowload/Download'

export function GetM({ arrayOfStrings }) {
  return (
    <button className={style.button} type="button" onClick={() => { Download(Modulation({ arrayOfStrings }), 'm.txt') }}>
      Download m
    </button>
  )
}
