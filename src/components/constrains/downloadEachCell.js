import { Download } from '../Dowload/Download'

export function downloadEachCell({
  modulation, cellLength, windowHasFocus, step, verticalOrHorizontal,
}) {
  let cellNumber = 0
  let point = 0
  let fileName = ''
  const cell = []
  cell[cellNumber] = []
  for (let index = 0; index < modulation.length; index += 1) {
    point = Number(modulation[index].split('\t')[0])
    cell[cellNumber].push(modulation[index])
    if (point === (cellNumber * Number(cellLength) + Number(cellLength))) {
      cellNumber += 1
      cell[cellNumber] = []
      cell[cellNumber].push(modulation[index])
      if (windowHasFocus) {
        fileName = `cell_${cellNumber}_cellLength_${cellLength}mm_step_${step}mm_${verticalOrHorizontal}.txt`
        Download(cell[cellNumber - 1], fileName)
      }
    } else if (point > (cellNumber * Number(cellLength) + Number(cellLength))) {
      cellNumber += 1
      cell[cellNumber] = []
      cell[cellNumber].push(modulation[index - 1])
      if (windowHasFocus) {
        fileName = `cell_${cellNumber}_cellLength_${cellLength}mm_step_${step}mm_${verticalOrHorizontal}.txt`
        Download(cell[cellNumber - 1], fileName)
      }
    }
  }
}
