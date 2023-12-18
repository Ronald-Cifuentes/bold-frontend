import { BtnApply, Checkbox, TooltipContainer } from './Tooltip.styled'
import { TooltipProps } from './interfaces'
import { signal } from '@preact/signals-react'
import { TooltipPop, FormX, HeaderTooltip, Close, Title, Item } from './Tooltip.styled'
import { ChangeEvent, FC, memo } from 'react'
import { IconFilter } from '../SectionLayout/SectionLayout.styled'
import adjustment from '../../assets/adjustment.svg'
import { IoClose } from 'react-icons/io5'

const checkList = ['Cobro con datafono', 'Cobros con link de pago', 'Ver todos']

export const visible = signal(false)
export const checked = signal<string[]>([])

const setVisible = (value: boolean) => {
  visible.value = value
}

const setChecked = (value: string[]) => {
  checked.value = value
}

const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
  let updatedList = [...checked.value]
  if (event.target.checked) {
    updatedList = [...checked.value, event.target.value]
  } else {
    updatedList.splice(checked.value.indexOf(event.target.value), 1)
  }
  setChecked(updatedList)
}
const handleForm = () => {}

// Return classes based on whether item is checked
const isChecked = (item: string) =>
  checked.value.includes(item) ? 'checked-item' : 'not-checked-item'

const Tooltip: FC<TooltipProps> = ({ dataTestId = 'tooltip' }) => {
  return (
    <TooltipContainer data-testid={dataTestId} onClick={() => setVisible(!visible.value)}>
      <div>FILTRAR</div>
      <IconFilter src={adjustment} alt='filtro' />
      <TooltipPop $visible={visible.value}>
        <HeaderTooltip>
          <div />
          <Title>FILTRAR</Title>
          <Close>
            <IoClose />
          </Close>
        </HeaderTooltip>
        <FormX onSubmit={handleForm}>
          {checkList.map((item, index) => (
            <Item key={index}>
              <Checkbox value={item} type='checkbox' onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </Item>
          ))}
          <BtnApply type='submit' className='apply-btn'>
            Aplicar
          </BtnApply>
        </FormX>
      </TooltipPop>
    </TooltipContainer>
  )
}

export default memo(Tooltip)
