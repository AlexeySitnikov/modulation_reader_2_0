import { Download } from '../Dowload/Download'

export function downloadEachCell({
  verticalModulation, cellLength, windowHasFocus, step,
}) {
  let cellNumber = 0
  let point = 0
  let fileName = ''
  const cell = []
  cell[cellNumber] = []
  for (let index = 0; index < verticalModulation.length; index += 1) {
    point = Number(verticalModulation[index].split('\t')[0])
    cell[cellNumber].push(verticalModulation[index])
    if (point === (cellNumber * Number(cellLength) + Number(cellLength))) {
      cellNumber += 1
      cell[cellNumber] = []
      cell[cellNumber].push(verticalModulation[index])
      if (windowHasFocus) {
        fileName = `cell_${cellNumber}_cellLength_${cellLength}mm_step_${step}mm.txt`
        Download(cell[cellNumber - 1], fileName)
      }
    } else if (point > (cellNumber * Number(cellLength) + Number(cellLength))) {
      cellNumber += 1
      cell[cellNumber] = []
      cell[cellNumber].push(verticalModulation[index - 1])
      if (windowHasFocus) {
        fileName = `cell_${cellNumber}_cellLength_${cellLength}mm_step_${step}mm.txt`
        Download(cell[cellNumber - 1], fileName)
      }
    }
  }
}
