import { SetDimension } from './SetDimension'
import { SetStep } from './SetStep'
import { useDimensions } from '../CustomHooks/useDimensions'
import { SeparateEachCell } from './SeparateEachCell'
import { GetVerticalAndHorizontalModulation } from './GetVerticalAndHorizontalModulation'
import style from './style.module.css'

export function GetModulationByPoints({ arrayOfStrings, setContent }) {
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
      <div className={style.GetVerticalAndHorizontalModulation}>
        <GetVerticalAndHorizontalModulation
          arrayOfStrings={arrayOfStrings}
          step={step}
          dimension={dimension}
          separateEachCell={separateEachCell}
          cellLength={cellLength}
          setContent={setContent}
        />
      </div>
    </div>
  )
}
