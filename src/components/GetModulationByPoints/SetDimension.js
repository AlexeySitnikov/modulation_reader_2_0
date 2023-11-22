import { Dimension } from './Dimension'

export function SetDimension() {
  const dimensionArray = ['mm', 'cm', 'dm', 'm']

  const onSelectHandler = () => {

  }

  return (
    <select onChange={onSelectHandler} value={0}>
      {dimensionArray.map((el) => (
        <Dimension dimension={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
