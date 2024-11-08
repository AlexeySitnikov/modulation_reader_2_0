import { getDimension } from './getDimension'
import { getHowManyDigits } from './getHowManyDigits'

export function getEachCellToZeroPoint({
  modulation, step, dimension, cellLength,
}) {
  const modulationReturn = modulation.map((element, index) => element.map((el) => {
    const asd = (
      Number(el.split('\t')[0]).toFixed(getHowManyDigits(step / getDimension(dimension)))
        - (cellLength * index)
    )
      .toFixed(getHowManyDigits(step / getDimension(dimension)))
    const a = el.split('\t')[1]
    return (`${asd}\t${a}`)
  }))

  return (modulationReturn)
}
