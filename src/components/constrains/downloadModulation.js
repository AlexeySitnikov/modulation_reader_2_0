import { Download } from '../Dowload/Download'
import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
import { HorizontalModulation } from '../ModulationByPoints/HorizontalModulation'
import { downloadEachCell } from './downloadEachCell'

export function downloadModulation({
  arrayOfStrings, step, dimension, cellLength, windowHasFocus, separateEachCell,
}) {
  const verticalModulation = VerticalModulation({ arrayOfStrings, step, dimension })
  if (verticalModulation) {
    if (!separateEachCell) {
      Download(verticalModulation, 'vertical.txt')
    } else {
      downloadEachCell({
        modulation: verticalModulation, cellLength, windowHasFocus, step, verticalOrHorizontal: 'vertical',
      })
    }
  }
  const horizontalModulation = HorizontalModulation({ arrayOfStrings, step, dimension })
  if (horizontalModulation) {
    if (!separateEachCell) {
      Download(horizontalModulation, 'horizontal.txt')
    } else {
      downloadEachCell({
        modulation: horizontalModulation, cellLength, windowHasFocus, step, verticalOrHorizontal: 'horizontal',
      })
    }
  }
}
