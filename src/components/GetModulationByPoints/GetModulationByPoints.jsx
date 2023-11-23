import { GetHorizontalModulation } from './GetHorizontalModulation'
import { GetVerticalModulation } from './GetVerticalModulation'
import { SetDimension } from './SetDimension'
import { SetStep } from './SetStep'
import { useDimensions } from '../CustomHooks/useDimensions'

export function GetModulationByPoints({ arrayOfStrings }) {
  const {
    step, setStep, dimension, setDimension,
  } = useDimensions()

  return (
    <div>
      <div>
        <SetStep step={step} setStep={setStep} />
        <SetDimension dimension={dimension} setDimension={setDimension} />
      </div>
      <div>
        <GetVerticalModulation
          arrayOfStrings={arrayOfStrings}
          step={step}
          dimension={dimension}
        />
        <GetHorizontalModulation
          arrayOfStrings={arrayOfStrings}
          step={step}
          dimension={dimension}
        />
      </div>
    </div>
  )
}
