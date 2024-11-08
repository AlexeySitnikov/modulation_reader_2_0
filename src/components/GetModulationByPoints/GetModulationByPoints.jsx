import { SetDimension } from './SetDimension'
import { SetStep } from './SetStep'
import { useDimensions } from '../CustomHooks/useDimensions'
import { SeparateEachCell } from './SeparateEachCell'
import { GetVerticalAndHorizontalModulation } from './GetVerticalAndHorizontalModulation'
import style from './style.module.css'
import { SetEachCellToZeroPoint } from './SetEachCellToZeroPoint'

export function GetModulationByPoints({ arrayOfStrings, setContent }) {
  const {
    step, setStep,
    dimension, setDimension,
    separateEachCell, setSeparateEachCell,
    cellLength, setCellLength,
    eachCellToZeroPoint, setEachCellToZeroPoint,
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
        <SetEachCellToZeroPoint
          eachCellToZeroPoint={eachCellToZeroPoint}
          setEachCellToZeroPoint={setEachCellToZeroPoint}
          cellLength={cellLength}
          separateEachCell={separateEachCell}
        />
      </div>
      <div className={style.GetVerticalAndHorizontalModulation}>
        <GetVerticalAndHorizontalModulation
          arrayOfStrings={arrayOfStrings}
          step={step}
          dimension={dimension}
          separateEachCell={separateEachCell}
          cellLength={cellLength}
          eachCellToZeroPoint={eachCellToZeroPoint}
          setContent={setContent}
        />
      </div>
    </div>
  )
}
