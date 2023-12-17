import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import Counter from '../Counter'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <Counter />
    </AppContainer>
  )
}

export default App
