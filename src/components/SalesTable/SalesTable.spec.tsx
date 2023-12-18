import { cleanup, render, screen } from '@testing-library/react'
import SalesTable from './SalesTable'

describe('<SalesTable />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<SalesTable />)

    const salesTable = screen.getByTestId('sales-table')

    expect(salesTable).toBeInTheDocument()
  })
})
