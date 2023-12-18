import { FC } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import './App.scss'
import Navbar from '../Navbar'
import Main from '../Main'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  return (
    <AppContainer data-testid={dataTestId}>
      <Navbar />
      <Main />
    </AppContainer>
  )
}

export default App
