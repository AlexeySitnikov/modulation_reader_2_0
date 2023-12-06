import { isGoodModulation } from '../Check/isGoodModulation'
import { isGoodR0 } from '../Check/isGoodR0'
import { isGoodZ } from '../Check/isGoodZ'

export function Radius({ arrayOfStrings }) {
  const checkModulation = arrayOfStrings.map((el) => Number(el.element.split(' ')[5]))
  const checkR0 = arrayOfStrings.map((el) => Number(el.element.split(' ')[7]))
  const checkZ = arrayOfStrings.map((el) => Number(el.element.split(' ')[22]))
  if (!isGoodModulation(checkModulation) || !isGoodR0(checkR0) || !isGoodZ(checkZ)) {
    // eslint-disable-next-line no-alert
    alert('Bad modulation or R_0 or Z')
    return false
  }

  const R_0 = arrayOfStrings.map((el, index) => {
    if (index === arrayOfStrings.length - 1) {
      return (`R${index + 1}="${el.element.split(' ')[7]}" ""\nR${index + 2}="${el.element.split(' ')[7]}" ""\n`)
    }
    return `R${index + 1}="${el.element.split(' ')[7]}" ""\n`
  })
  return R_0
}
