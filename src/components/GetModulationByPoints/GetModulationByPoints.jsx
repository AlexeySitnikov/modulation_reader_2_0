import { GetHorizontalModulation } from './GetHorizontalModulation'
import { GetVerticalModulation } from './GetVerticalModulation'
import { SetDimension } from './SetDimension'
import { SetStep } from './SetStep'
import { useDimensions } from '../CustomHooks/useDimensions'
import { SeparateEachCell } from './SeparateEachCell'

export function GetModulationByPoints({ arrayOfStrings }) {
  const {
    step,
    setStep,
    dimension, setDimension, separateEachCell, setSeparateEachCell, cellLength, setCellLength,
  } = useDimensions()

  return (
    <div>
      <div>
        <SetStep step={step} setStep={setStep} />
        <SetDimension dimension={dimension} setDimension={setDimension} />
        <SeparateEachCell
          separateEachCell={separateEachCell}
          setSeparateEachCell={setSeparateEachCell}
          setCellLength={setCellLength}
        />
      </div>
      <div>
        <GetVerticalModulation
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
        />
      </div>
    </div>
  )
}
