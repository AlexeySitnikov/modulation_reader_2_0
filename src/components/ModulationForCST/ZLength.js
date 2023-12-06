import { isGoodModulation } from '../Check/isGoodModulation'
import { isGoodR0 } from '../Check/isGoodR0'
import { isGoodZ } from '../Check/isGoodZ'

export function ZLength({ arrayOfStrings }) {
  const checkModulation = arrayOfStrings.map((el) => Number(el.element.split(' ')[5]))
  const checkR0 = arrayOfStrings.map((el) => Number(el.element.split(' ')[7]))
  const checkZ = arrayOfStrings.map((el) => Number(el.element.split(' ')[22]))
  if (!isGoodModulation(checkModulation) || !isGoodR0(checkR0) || !isGoodZ(checkZ)) {
    // eslint-disable-next-line no-alert
    alert('Bad modulation or R_0 or Z')
    return false
  }

  const Z = arrayOfStrings.map((el, index) => `Z${index + 1}="${el.element.split(' ')[22]}" ""\n`)
  return Z
}
