import { downloadEachCell } from '../constrains/downloadEachCell'
import { getEachCellToZeroPoint } from '../constrains/getEachCellToZeroPoint'
import { Download } from '../Dowload/Download'
import { HorizontalModulation } from '../ModulationByPoints/HorizontalModulation'
import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
import { GetModulation } from './GetModulation'
import style from './style.module.css'

export function LinksToVerticalAndHorizontalModulation({
  arrayOfStrings, step, dimension, separateEachCell, cellLength, eachCellToZeroPoint,
}) {
  let verticalModulation = []
  let horizontalModulation = []
  let fileName = ''

  if (!separateEachCell) {
    verticalModulation.push(VerticalModulation({ arrayOfStrings, step, dimension }))
    horizontalModulation.push(HorizontalModulation({ arrayOfStrings, step, dimension }))
    Download(verticalModulation, 'vertical.txt')
    Download(horizontalModulation, 'horizontal.txt')
  } else {
    verticalModulation = downloadEachCell({
      modulation: VerticalModulation({ arrayOfStrings, step, dimension }),
      cellLength,
    })
    if (eachCellToZeroPoint) {
      verticalModulation = getEachCellToZeroPoint({
        modulation: verticalModulation, step, dimension, cellLength,
      })
    }
    for (let index = 0; index < verticalModulation.length; index += 1) {
      fileName = `cell_${index + 1}_cellLength_${cellLength}mm_step_${step}mm_vertical.txt`
      Download(verticalModulation[index], fileName)
    }
    horizontalModulation = downloadEachCell({
      modulation: HorizontalModulation({ arrayOfStrings, step, dimension }),
      cellLength,
    })
    if (eachCellToZeroPoint) {
      horizontalModulation = getEachCellToZeroPoint({
        modulation: horizontalModulation, step, dimension, cellLength,
      })
    }
    for (let index = 0; index < horizontalModulation.length; index += 1) {
      fileName = `cell_${index + 1}_cellLength_${cellLength}mm_step_${step}mm_horizontal.txt`
      Download(horizontalModulation[index], fileName)
    }
  }

  if (separateEachCell) {
    return (
      <div className={style.separatedCellsModal}>
        <p>
          Если загрузка не началась нажмите на ссылки
        </p>
        <div className={style.listOfCells}>
          <div>
            {verticalModulation.map((element, index) => (
              <div key={crypto.randomUUID()}>
                <GetModulation
                  modulation={element}
                  name={`cell_${index + 1}_vertical`}
                  fileName={`cell_${index + 1}_cellLength_${cellLength}mm_step_${step}mm_vertical`}
                  key={crypto.randomUUID()}
                />
              </div>
            ))}
          </div>
          <div>
            {horizontalModulation.map((element, index) => (
              <div>
                <GetModulation
                  modulation={element}
                  name={`cell_${index + 1}_horizontal`}
                  fileName={`cell_${index + 1}_cellLength_${cellLength}mm_step_${step}mm_horizontal`}
                  key={crypto.randomUUID()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={style.GetModulationNotSeparateCells}>
      Если загрузка не началась нажмите на ссылки
      <div>
        <GetModulation modulation={verticalModulation[0]} name="vertical" />
        <GetModulation modulation={horizontalModulation[0]} name="horizontal" />
      </div>
    </div>
  )
}
