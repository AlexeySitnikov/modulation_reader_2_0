export function downloadEachCell({
  modulation, cellLength,
}) {
  let cellNumber = 0
  let point = 0
  const cell = []
  cell[cellNumber] = []
  for (let index = 0; index < modulation.length; index += 1) {
    point = Number(modulation[index].split('\t')[0])
    cell[cellNumber].push(modulation[index])
    if (point === (cellNumber * Number(cellLength) + Number(cellLength))) {
      cellNumber += 1
      cell[cellNumber] = []
      cell[cellNumber].push(modulation[index])
    } else if (point > (cellNumber * Number(cellLength) + Number(cellLength))) {
      cellNumber += 1
      cell[cellNumber] = []
      cell[cellNumber].push(modulation[index - 1])
    }
  }
  return cell.slice(0, cell.length - 1)
}
