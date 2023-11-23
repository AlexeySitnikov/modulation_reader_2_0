import { Download } from '../Dowload/Download'
import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
import style from './style.module.css'

export function GetVerticalModulation({ arrayOfStrings, step, dimension }) {
  const onClickButtonHandler = () => {
    const verticalModulation = VerticalModulation({ arrayOfStrings, step, dimension })
    if (verticalModulation) {
      Download(verticalModulation, 'vertical.txt')
    }
  }
  return (
    <button
      className={style.button}
      type="button"
      onClick={onClickButtonHandler}
    >
      Get vertical modulation
    </button>
  )
}
