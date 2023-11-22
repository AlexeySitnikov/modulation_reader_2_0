export function ZLength({ arrayOfStrings }) {
  const Z = arrayOfStrings.map((el, index) => `Z${index + 1}="${el.element.split(' ')[22]}" ""\n`)
  return Z
}
