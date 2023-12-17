import { FC } from 'react'
import { CounterContainer } from './Counter.styled'
import { CounterProps } from './interfaces'
import { signal } from '@preact/signals-react'

const count = signal(0)

const setPlusCount = () => {
  count.value += 1
}
const setMinusCount = () => {
  count.value -= 1
}

const Counter: FC<CounterProps> = ({ dataTestId = 'counter' }) => {
  return (
    <CounterContainer data-testid={dataTestId}>
      <div>Count: {count.value}</div>
      <button onClick={setPlusCount}>+</button>
      <button onClick={setMinusCount}>-</button>
    </CounterContainer>
  )
}

export default Counter
