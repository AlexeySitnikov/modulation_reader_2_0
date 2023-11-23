import { HorizontalModulation } from '../ModulationByPoints/HorizontalModulation'
import { Download } from '../Dowload/Download'
import style from './style.module.css'

export function GetHorizontalModulation({ arrayOfStrings, step, dimension }) {
  const onClickButtonHandler = () => {
    const horizontalModulation = HorizontalModulation({ arrayOfStrings, step, dimension })
    if (horizontalModulation) {
      Download(horizontalModulation, 'horizontal.txt')
    }
  }
  return (
    <button
      className={style.button}
      type="button"
      onClick={onClickButtonHandler}
    >
      Get horizontal modulation
    </button>
  )
}
