import { Dimension } from './Dimension'

export function SetDimension({ dimension, setDimension }) {
  const dimensions = ['mm', 'cm', 'dm', 'm']

  const onSelectHandler = (e) => {
    setDimension(e.target.value)
  }

  return (
    <select onChange={onSelectHandler} value={dimension}>
      {dimensions.map((el) => (
        <Dimension dimension={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
