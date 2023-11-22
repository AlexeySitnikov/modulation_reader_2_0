export function Radius({ arrayOfStrings }) {
  const R_0 = arrayOfStrings.map((el, index) => {
    if (index === arrayOfStrings.length - 1) {
      return (`R${index + 1}="${el.element.split(' ')[7]}" ""\nR${index + 2}="${el.element.split(' ')[7]}" ""\n`)
    }
    return `R${index + 1}="${el.element.split(' ')[7]}" ""\n`
  })
  return R_0
}
