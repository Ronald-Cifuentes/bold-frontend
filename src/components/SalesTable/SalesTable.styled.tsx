import styled, { css } from 'styled-components'

export const TableThTd = css`
  border-collapse: collapse;
`

export const ThTd = css`
  text-align: left;
`

export const SalesTableContainer = styled.table`
  width: 100%;
  ${TableThTd};
`
export const Th = styled.th`
  font-size: 20px;
  font-weight: 400;
  ${TableThTd};
  ${ThTd}
`

export const Tr = styled.tr`
  border-bottom: 1px solid #e3e3e3;
`
export const Td = styled.td`
  font-size: 18px;
  ${TableThTd}
  ${ThTd}
`

export const Thead = styled.thead`
  color: #6b6b6b;
  & th,
  td {
    padding: 20px;
  }
`

export const Tbody = styled.tbody`
  color: #a0a0a0;
`

export const WithDiscount = css`
  height: 70px;
`

export const IconTransaction = styled.img`
  height: 26px;
  margin: 0 10px 0 0;
`

export const Success = css`
  border-left: 5px solid #132268;
`

export const NotSuccess = css`
  border-left: 5px solid #969696;
`

export const TransactionColumn = styled.div<{ $withDiscount?: boolean; $success?: boolean }>`
  padding: 20px;
  display: flex;
  ${({ $withDiscount }) => $withDiscount && WithDiscount}
  ${({ $success }) => ($success ? Success : NotSuccess)}
`
export const DateTimeColumn = styled.div<{ $withDiscount?: boolean }>`
  padding: 20px;
  display: flex;
  ${({ $withDiscount }) => $withDiscount && WithDiscount}
`

export const PaymentMethodColumn = styled.div<{ $withDiscount?: boolean }>`
  padding: 20px;
  display: flex;
  flex-direction: row;
  ${({ $withDiscount }) => $withDiscount && WithDiscount}
`

export const IdColumn = styled.div<{ $withDiscount?: boolean }>`
  padding: 20px;
  display: flex;
  padding: 20px;
  ${({ $withDiscount }) => $withDiscount && WithDiscount}
`
export const AmountColumn = styled.div<{ $withDiscount?: boolean }>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #202e71;
  ${({ $withDiscount }) => $withDiscount && WithDiscount}
`

export const DiscountTitle = styled.p`
  color: #a0a0a0;
`
export const DiscountValue = styled.p`
  color: #e78487;
`
