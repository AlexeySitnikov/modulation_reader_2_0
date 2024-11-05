import { downloadEachCell } from '../constrains/downloadEachCell'
import { HorizontalModulation } from '../ModulationByPoints/HorizontalModulation'
import { VerticalModulation } from '../ModulationByPoints/VerticalModulation'
// import { GetHorizontalModulation } from './GetHorizontalModulation'
import { GetModulation } from './GetModulation'
// import { GetVerticalModulation } from './GetVerticalModulation'

export function LinksToVerticalAndHorizontalModulation({
  arrayOfStrings, step, dimension, separateEachCell, cellLength,
}) {
  let verticalModulation = []
  const horizontalModulation = []

  if (!separateEachCell) {
    verticalModulation.push(VerticalModulation({ arrayOfStrings, step, dimension }))
    horizontalModulation.push(HorizontalModulation({ arrayOfStrings, step, dimension }))
  } else {
    verticalModulation = downloadEachCell(
      { modulation: VerticalModulation({ arrayOfStrings, step, dimension }), cellLength },
    )
    horizontalModulation.push(downloadEachCell(
      { modulation: HorizontalModulation({ arrayOfStrings, step, dimension }), cellLength },
    ))
  }

  console.log(verticalModulation)
  console.log(horizontalModulation)

  if (separateEachCell) {
    return (<div>Ссылки на все секции резонатора</div>)
  }
  return (
    <div>
      Если загрузка не началась нажмите на ссылки
      <div>
        <GetModulation modulation={verticalModulation[0]} name="vertical" />
        <GetModulation modulation={horizontalModulation[0]} name="horizontal" />
        {/* <GetVerticalModulation
          arrayOfStrings={arrayOfStrings}
          step={step}
          dimension={dimension}
          separateEachCell={separateEachCell}
          cellLength={cellLength}
        />
        <GetHorizontalModulation
          arrayOfStrings={arrayOfStrings}
          step={step}
          dimension={dimension}
          separateEachCell={separateEachCell}
          cellLength={cellLength}
        /> */}
      </div>
    </div>
  )
}
