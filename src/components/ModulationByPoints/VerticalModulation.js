import { isGoodModulation } from '../Check/isGoodModulation'
import { isGoodR0 } from '../Check/isGoodR0'
import { isGoodZ } from '../Check/isGoodZ'
import { getDimension } from '../constrains/getDimension'
import { getHowManyDigits } from '../constrains/getHowManyDigits'
import { getSign } from '../constrains/getSign'
import { getTip } from '../constrains/getTip'

export function VerticalModulation({ arrayOfStrings, step, dimension }) {
  const modulation = arrayOfStrings.map((el) => Number(el.element.split(' ')[5]))
  modulation.push(modulation[modulation.length - 1])

  const R_0 = arrayOfStrings.map((el) => Number(el.element.split(' ')[7]))
  R_0.push(R_0[R_0.length - 1])

  const Z = arrayOfStrings.map((el) => Number(el.element.split(' ')[22]))

  if (!isGoodModulation(modulation) || !isGoodR0(R_0) || !isGoodZ(Z)) {
    // eslint-disable-next-line no-alert
    alert('Bad modulation or R_0 or Z')
    return false
  }

  let zCoordinate = 0
  let t = 0.0
  let tip = 0n
  let n = 1
  const vertical = []

  while (t <= Z[0]) {
    tip = ((R_0[0]
        + (t / Z[0]) * (R_0[1] - R_0[0]))
      * (1 - (0.5 * (modulation[0] + modulation[1])
      + 0.5 * (modulation[0] - modulation[1])
      * Math.cos(Math.PI * (t / Z[0])) - 1)
      / (0.5 * (modulation[0] + modulation[1])
      + 0.5 * (modulation[0] - modulation[1])
      * (Math.cos(Math.PI * (t / Z[0])) + 1) * Math.cos(Math.PI * (t / Z[0])))))

    vertical.push(`${Number.parseFloat(zCoordinate / getDimension(dimension))
      .toFixed(getHowManyDigits(step / getDimension(dimension)))}\t${Number.parseFloat(tip / getDimension(dimension)).toFixed(8)}\n`)

    t = Math.round(step * n * 100000) / 100000
    zCoordinate = Math.round(step * n * 100000) / 100000
    n += 1
  }

  for (let i = 0; i < Z.length - 1; i += 1) {
    let n1 = 1
    const tZero = Math.round((zCoordinate - Z[i]) * 100000) / 100000
    t = Math.round((zCoordinate - Z[i]) * 100000) / 100000
    if ((i % 2) === 0) {
      while (t <= Math.round((Z[i + 1] - Z[i]) * 100000) / 100000) {
        tip = getTip({
          t,
          Z_start: Z[i],
          Z_end: Z[i + 1],
          R0_start: R_0[i + 1],
          R0_end: R_0[i + 2],
          m_start: modulation[i + 1],
          m_end: modulation[i + 2],
          koef: 1,
        })

        vertical.push(`${Number.parseFloat(zCoordinate / getDimension(dimension))
          .toFixed(getHowManyDigits(step / getDimension(dimension)))}\t${Number.parseFloat(tip / getDimension(dimension)).toFixed(8)}\n`)
        t = Math.round((tZero + (step * n1)) * 100) / 100

        zCoordinate = Math.round(step * n * 100000) / 100000
        n += 1
        n1 += 1
      }
    } else {
      while (t <= Math.round((Z[i + 1] - Z[i]) * 100000) / 100000) {
        tip = getTip({
          t,
          Z_start: Z[i],
          Z_end: Z[i + 1],
          R0_start: R_0[i + 1],
          R0_end: R_0[i + 2],
          m_start: modulation[i + 1],
          m_end: modulation[i + 2],
          koef: -1,
        })

        vertical.push(`${Number.parseFloat(zCoordinate / getDimension(dimension))
          .toFixed(getHowManyDigits(step / getDimension(dimension)))}\t${Number.parseFloat(tip / getDimension(dimension)).toFixed(8)}\n`)
        t = Math.round((tZero + (step * n1)) * 100000) / 100000
        zCoordinate = Math.round(step * n * 100000) / 100000
        n += 1
        n1 += 1
      }
    }
  }
  n -= 2
  zCoordinate = Math.round(step * n * 100000) / 100000
  t = Z[Z.length - 1] - Z[Z.length - 2]
  if (Z[Z.length - 1] > zCoordinate) {
    tip = getTip({
      t,
      Z_start: Z[Z.length - 2],
      Z_end: Z[Z.length - 2 + 1],
      R0_start: R_0[Z.length - 2 + 1],
      R0_end: R_0[Z.length - 2 + 2],
      m_start: modulation[Z.length - 2 + 1],
      m_end: modulation[Z.length - 2 + 2],
      koef: -getSign(Z.length - 2),
    })
    vertical.push(`${Number.parseFloat(Z[Z.length - 1] / getDimension(dimension))
      .toFixed(getHowManyDigits(step / getDimension(dimension)))}\t${Number.parseFloat(tip / getDimension(dimension)).toFixed(8)}\n`)
  }
  return vertical
}
