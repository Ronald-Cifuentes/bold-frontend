import { FC } from 'react'
import {
  AmountColumn,
  DateTimeColumn,
  DiscountTitle,
  DiscountValue,
  IconTransaction,
  IdColumn,
  PaymentMethodColumn,
  SalesTableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TransactionColumn,
} from './SalesTable.styled'
import { SalesTableProps, Row, RowList } from './interfaces'
import dataphone from '../../assets/dataphone.svg'
import link from '../../assets/link.svg'
import mastercard from '../../assets/mastercard.png'
import { selectedRadioBtn } from '../SectionLayout/SectionLayout'
import { listChecks } from '../Tooltip/Tooltip'

const TransactionTypes = {
  dataphone: dataphone,
  link: link,
}

const HeadersX = [
  {
    key: 'transaction',
    value: 'Transacción',
    cb: (row: Row, rowList: RowList) => {
      const TransactionType =
        TransactionTypes?.[(row?.transactionType || 'dataphone') as keyof typeof TransactionTypes]
      return (
        <TransactionColumn
          $success={row?.value === 'Cobro exitoso'}
          $withDiscount={Boolean(rowList[4].discount)}
        >
          <IconTransaction src={TransactionType} alt='Cobro exitoso' />
          <p>{row?.value}</p>
        </TransactionColumn>
      )
    },
  },
  {
    key: 'dateTime',
    value: 'Fecha y hora',
    cb: (row: Row, rowList: RowList) => (
      <DateTimeColumn $withDiscount={Boolean(rowList[4].discount)}>{row.value}</DateTimeColumn>
    ),
  },
  {
    key: 'paymentMethod',
    value: 'Método de pago',
    cb: (row: Row, rowList: RowList) => (
      <PaymentMethodColumn $withDiscount={Boolean(rowList[4].discount)}>
        <IconTransaction src={mastercard} alt='Cobro no realizado' />
        <p>{row.value}</p>
      </PaymentMethodColumn>
    ),
  },
  {
    key: 'id',
    value: 'ID transacción Bold',
    cb: (row: Row, rowList: RowList) => (
      <IdColumn $withDiscount={Boolean(rowList[4].discount)}>{row.value}</IdColumn>
    ),
  },
  {
    key: 'amount',
    value: 'Monto',
    cb: (row: Row, rowList: RowList) => (
      <AmountColumn $withDiscount={Boolean(rowList[4].discount)}>
        <p>{row.value}</p>
        {row.discount && (
          <div>
            <DiscountTitle>Deducción Bold</DiscountTitle>
            <DiscountValue>{row.discount}</DiscountValue>
          </div>
        )}
      </AmountColumn>
    ),
  },
]

const rows = [
  [
    { key: 'transaction', value: 'Cobro exitoso', transactionType: 'dataphone' },
    { key: 'dateTime', value: '12/01/2023 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000', discount: '$12.500' },
  ],
  [
    { key: 'transaction', value: 'Cobro no realizado', transactionType: 'dataphone' },
    { key: 'dateTime', value: '12/18/2023 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000' },
  ],
  [
    { key: 'transaction', value: 'Cobro exitoso', transactionType: 'link' },
    { key: 'dateTime', value: '12/19/2023 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000', discount: '$12.500' },
  ],
  [
    { key: 'transaction', value: 'Cobro exitoso', transactionType: 'dataphone' },
    { key: 'dateTime', value: '12/30/2023 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000' },
  ],
  [
    { key: 'transaction', value: 'Cobro no realizado', transactionType: 'link' },
    { key: 'dateTime', value: '12/02/2023 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000' },
  ],
]

const FilterByDay = (): Row[][] => {
  const currentDate = '12/18/2023'
  const result: Row[][] = rows.filter(row => {
    const dateObj = row.find(obj => obj.key === 'dateTime')
    return dateObj && dateObj.value.startsWith(currentDate)
  })
  return result
}

const FilterByWeek = () => {
  const startDate = new Date('12/18/2023')
  const endDate = new Date('12/23/2023')

  const result = rows.filter(row => {
    const dateObj = row.find(obj => obj.key === 'dateTime')
    if (dateObj) {
      const rowDate = new Date(dateObj.value.split(' - ')[0])
      return rowDate >= startDate && rowDate <= endDate
    }
    return false
  })

  return result
}

const FilterByMonth = () => {
  const startDate = new Date('12/01/2023') // replace with the start date
  const endDate = new Date('12/30/2023') // replace with the end date

  const result = rows.filter(row => {
    const dateObj = row.find(obj => obj.key === 'dateTime')
    if (dateObj) {
      const rowDate = new Date(dateObj.value.split(' - ')[0])
      return rowDate >= startDate && rowDate <= endDate
    }
    return false
  })

  return result
}

const FilterByPayment = (rowx: Row[][], transactionTypes: string[]) => {
  const result = rowx.filter(row => {
    const transactionObj = row.find(obj => obj.key === 'transaction')
    return transactionObj && transactionTypes.includes(String(transactionObj.transactionType))
  })

  return result
}

type FilterFunction = () => Row[][]

type SelectTime = { [key: string]: FilterFunction; day: FilterFunction; week: FilterFunction }

const selectTime: SelectTime = {
  day: FilterByDay,
  week: FilterByWeek,
  month: FilterByMonth,
}

const SalesTable: FC<SalesTableProps> = ({ dataTestId = 'sales-table' }) => {
  return (
    <SalesTableContainer data-testid={dataTestId} aria-describedby='mydesc'>
      <Thead>
        <Tr>
          {HeadersX.map((item, i) => (
            <Th key={`th-item-${i}`}>{item.value}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {FilterByPayment(selectTime[selectedRadioBtn?.value](), listChecks.value).map(
          (rowList: RowList, ix) => {
            return (
              <Tr key={`tr-${ix}`}>
                {rowList.map((col, iy) => (
                  <Td key={`td-${iy}`}>{HeadersX[iy].cb(col, rowList)}</Td>
                ))}
              </Tr>
            )
          }
        )}
      </Tbody>
    </SalesTableContainer>
  )
}

export default SalesTable
