import { GetM } from './GetM'
import { GetR0 } from './GetR0'
import { GetZ } from './GetZ'
import style from './style.module.css'

export function GetModulationForCST({ arrayOfStrings }) {
  return (
    <div className={style.formWrapper}>
      <GetM arrayOfStrings={arrayOfStrings} />
      <GetR0 arrayOfStrings={arrayOfStrings} />
      <GetZ arrayOfStrings={arrayOfStrings} />
    </div>
  )
}
