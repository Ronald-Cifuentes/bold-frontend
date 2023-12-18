import { FC } from 'react'
import { AutoDimensionTable, SectionSalesContainer, Subtitle } from './SectionSales.styled'
import { SectionSalesProps } from './interfaces'
import SalesTable from '../SalesTable'

const SectionSales: FC<SectionSalesProps> = ({ dataTestId = 'section-sales' }) => {
  return (
    <SectionSalesContainer data-testid={dataTestId}>
      <Subtitle id='mydesc'>Tus ventas de septiembre</Subtitle>
      <AutoDimensionTable>
        <SalesTable />
      </AutoDimensionTable>
    </SectionSalesContainer>
  )
}

export default SectionSales
