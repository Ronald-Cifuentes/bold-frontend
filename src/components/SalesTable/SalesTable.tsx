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

const TransactionTypes = {
  dataphone: dataphone,
  link: link,
}

const HeadersX = [
  {
    key: 'transaction',
    value: 'Transacción',
    cb: (row: Row, rowList: RowList) => {
      console.log('xxxx', rowList[4].discount)
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
    { key: 'dateTime', value: '04/06/2020 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000', discount: '$12.500' },
  ],
  [
    { key: 'transaction', value: 'Cobro no realizado', transactionType: 'dataphone' },
    { key: 'dateTime', value: '04/06/2020 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000' },
  ],
  [
    { key: 'transaction', value: 'Cobro exitoso', transactionType: 'link' },
    { key: 'dateTime', value: '04/06/2020 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000', discount: '$12.500' },
  ],
  [
    { key: 'transaction', value: 'Cobro exitoso', transactionType: 'dataphone' },
    { key: 'dateTime', value: '04/06/2020 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000' },
  ],
  [
    { key: 'transaction', value: 'Cobro no realizado', transactionType: 'link' },
    { key: 'dateTime', value: '04/06/2020 - 17:24:24' },
    { key: 'paymentMethod', value: '**** **** 7771' },
    { key: 'id', value: 'GZENZ3784UBV2' },
    { key: 'amount', value: '$25.000' },
  ],
]

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
        {rows.map((rowList: RowList, ix) => (
          <Tr key={`tr-${ix}`}>
            {rowList.map((col, iy) => (
              <Td key={`td-${iy}`}>{HeadersX[iy].cb(col, rowList)}</Td>
            ))}
          </Tr>
        ))}

        {/* {rows.map((columns, ix) => {
          console.log('xxx', columns)
          return (
            <Tr key={`tr-${ix}`} className='with-discount'>
              {HeadersX.map((h, iy) => {
                return <Td key={`td-${iy}`}>{}</Td>
              })}
              <Td>xxx</Td>
            </Tr>
          )
        })} */}

        {/* <Tr>
          <Td>
            <div className='transaction-column not-success'>
              <img
                className='icon-transaction'
                src='assets/dataphone.svg'
                alt='Cobro no realizado'
              />
              <p>Cobro no realizado</p>
            </div>
          </Td>
          <Td>
            <div className='date-time-column'>04/06/2020 - 17:24:24</div>
          </Td>
          <Td>
            <div className='payment-method-column'>
              <img
                className='icon-transaction'
                src='assets/mastercard.png'
                alt='Cobro no realizado'
              />
              <p>**** **** 7771</p>
            </div>
          </Td>
          <Td>
            <div className='id-column'>GZENZ3784UBV2</div>
          </Td>
          <Td>
            <div className='amount-column'>
              <p>$15.000</p>
              <div
                style={{
                  display: 'none',
                }}
              >
                <p className='discount-title'>Deducción Bold</p>
                <p className='discount-value'>$12.500</p>
              </div>
            </div>
          </Td>
        </Tr>
        <Tr className='with-discount'>
          <Td>
            <div className='transaction-column success'>
              <img className='icon-transaction' src='assets/link.svg' alt='Cobro exitoso' />
              <p>Cobro exitoso</p>
            </div>
          </Td>
          <Td>
            <div className='date-time-column'>04/06/2020 - 17:24:24</div>
          </Td>
          <Td>
            <div className='payment-method-column'>
              <img
                className='icon-transaction'
                src='assets/mastercard.png'
                alt='Cobro no realizado'
              />
              <p>**** **** 7771</p>
            </div>
          </Td>
          <Td>
            <div className='id-column'>GZENZ3784UBV2</div>
          </Td>
          <Td>
            <div className='amount-column'>
              <p>$25.000</p>
              <div>
                <p className='discount-title'>Deducción Bold</p>
                <p className='discount-value'>$12.500</p>
              </div>
            </div>
          </Td>
        </Tr> */}
      </Tbody>
    </SalesTableContainer>
  )
}

export default SalesTable
