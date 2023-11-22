import { GetHorizontalModulation } from './GetHorizontalModulation'
import { GetVerticalModulation } from './GetVerticalModulation'
import { SetDimension } from './SetDimension'
import { SetStep } from './SetStep'

export function GetModulationByPoints() {
  return (
    <div>
      <div>
        <SetStep />
        <SetDimension />
      </div>
      <div>
        <GetVerticalModulation />
        <GetHorizontalModulation />
      </div>
    </div>
  )
}
