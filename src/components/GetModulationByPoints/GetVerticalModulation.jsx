import { Download } from '../Dowload/Download'
import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
import style from './style.module.css'

export function GetVerticalModulation({
  arrayOfStrings, step, dimension, separateEachCell, cellLength,
}) {
  const onClickButtonHandler = () => {
    const verticalModulation = VerticalModulation({ arrayOfStrings, step, dimension })
    if (verticalModulation) {
      if (!separateEachCell) {
        Download(verticalModulation, 'vertical.txt')
      } else {
        let cellNumber = 0
        let firstPoint = 0
        let lastPoint = 0
        let point = 0
        for (let index = 0; index < verticalModulation.length; index += 1) {
          point = Number(verticalModulation[index].split('\t')[0])
          if (point === (cellNumber * Number(cellLength) + Number(cellLength))) {
            lastPoint = point
            console.log(`firstPoint = ${firstPoint}`)
            console.log(`lastPoint = ${lastPoint}`)
            cellNumber += 1
            firstPoint = lastPoint
          } else if (point > (cellNumber * Number(cellLength) + Number(cellLength))) {
            lastPoint = point
            console.log(`firstPoint = ${firstPoint}`)
            console.log(`lastPoint = ${lastPoint}`)
            cellNumber += 1
            firstPoint = Number(verticalModulation[index - 1].split('\t')[0])
          }
        }
      }
    }
  }

  const selectClassName = () => {
    if (separateEachCell) {
      if (cellLength > 0) {
        return (`${style.button}`)
      } return (`${style.button} ${style.disabledButton}`)
    }
    return (`${style.button}`)
  }

  const isButtonDisable = () => {
    if (separateEachCell) {
      if (cellLength > 0) {
        return (false)
      } return (true)
    }
    return (false)
  }

  return (
    <button
      className={selectClassName()}
      type="button"
      onClick={onClickButtonHandler}
      disabled={isButtonDisable()}
    >
      Get vertical modulation
    </button>
  )
}
