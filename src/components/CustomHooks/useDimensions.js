import { useState } from 'react'

export const useDimensions = () => {
  const [step, setStep] = useState(0.25)
  const [dimension, setDimension] = useState('mm')
  const [separateEachCell, setSeparateEachCell] = useState(false)
  const [cellLength, setCellLength] = useState(0)
  const [eachCellToZeroPoint, setEachCellToZeroPoint] = useState(false)

  return {
    step,
    setStep,
    dimension,
    setDimension,
    separateEachCell,
    setSeparateEachCell,
    cellLength,
    setCellLength,
    eachCellToZeroPoint,
    setEachCellToZeroPoint,
  }
}
