import style from '../GetModulationByPoints/style.module.css'

export function selectClassName({ separateEachCell, cellLength }) {
  if (separateEachCell) {
    if (cellLength > 0) {
      return (`${style.button}`)
    } return (`${style.button} ${style.disabledButton}`)
  }
  return (`${style.button}`)
}
