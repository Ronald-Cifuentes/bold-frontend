export interface SalesTableProps {
  dataTestId?: string
}

export type Row =
  | {
      key: string
      value: string
      transactionType: string
      discount?: undefined
    }
  | {
      key: string
      value: string
      transactionType?: undefined
      discount?: undefined
    }
  | {
      key: string
      value: string
      discount: string
      transactionType?: undefined
    }

export type RowList = Row[]
