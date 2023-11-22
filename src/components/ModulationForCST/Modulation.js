export function Modulation({ arrayOfStrings }) {
  const modulation = arrayOfStrings.map((el, index) => {
    if (index === arrayOfStrings.length - 1) {
      return (`m${index + 1}="${el.element.split(' ')[5]}" ""\nm${index + 2}="${el.element.split(' ')[5]}" ""\n`)
    }
    return `m${index + 1}="${el.element.split(' ')[5]}" ""\n`
  })
  return modulation
}
