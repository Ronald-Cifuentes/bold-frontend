import { ChangeEvent, FC } from 'react'
import {
  Card,
  CardContent,
  CardTitle,
  CardTitleText,
  Date,
  Filter,
  Filters,
  IconInfo,
  Radio,
  SectionLayoutContainer,
  Total,
  WrapBtnFilter,
} from './SectionLayout.styled'
import { SectionLayoutProps } from './interfaces'
import info from '../../assets/info.svg'
import { signal } from '@preact/signals-react'
import Tooltip from '../Tooltip'
export const selectedRadioBtn = signal('month')

export const texts = {
  text1: 'Total de ventas de septiembre',
  text2: '$1’560.000',
  text3: 'Septiembre, 2020',
}

export const filter = [
  { name: 'myRadio', key: 'day', value: 'Hoy' },
  { name: 'myRadio', key: 'week', value: 'Esta semana' },
  { name: 'myRadio', key: 'month', value: 'Septiembre' },
]

// const transactFilter = signal(false)
// const popupTimeFilter = signal(false)
// const timeFilter = signal('')

// const handleTransactFilter = () => {
//   transactFilter.value = true
// }
// const handleOpenTimeFilter = () => {
//   popupTimeFilter.value = true
// }

// const handleCloseTimeFilter = () => {
//   popupTimeFilter.value = true
// }
// const handleTimeFilter = (value: string) => {
//   timeFilter.value = value
// }

const SectionLayout: FC<SectionLayoutProps> = ({ dataTestId = 'section-layout' }) => {
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    selectedRadioBtn.value = e.target.value
  }

  const isRadioSelected = (value: string) => selectedRadioBtn.value === value

  return (
    <SectionLayoutContainer data-testid={dataTestId}>
      <Card>
        <CardTitle>
          <CardTitleText>{texts.text1}</CardTitleText>
          <IconInfo src={info} alt='info-icon' />
        </CardTitle>
        <CardContent>
          <div>
            <Total>{texts.text2}</Total>
            <Date>{texts.text3}</Date>
          </div>
        </CardContent>
      </Card>

      <div>
        <Filters>
          {filter.map((item, i) => (
            <Filter key={`filter-${i}`} $active={isRadioSelected(item.key)}>
              {item.value}
              <Radio
                name={item.name}
                value={item.key}
                onChange={handleRadio}
                checked={isRadioSelected(item.key)}
              />
            </Filter>
          ))}
        </Filters>
        <WrapBtnFilter>
          <Tooltip />
        </WrapBtnFilter>
      </div>
    </SectionLayoutContainer>
  )
}

export default SectionLayout
