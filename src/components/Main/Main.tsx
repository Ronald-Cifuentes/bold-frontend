import { FC } from 'react'
import { MainContainer } from './Main.styled'
import { MainProps } from './interfaces'
import SectionLayout from '../SectionLayout'
import SectionSales from '../SectionSales'

const Main: FC<MainProps> = ({ dataTestId = 'main' }) => {
  return (
    <MainContainer data-testid={dataTestId}>
      <SectionLayout />
      <SectionSales />
    </MainContainer>
  )
}

export default Main
