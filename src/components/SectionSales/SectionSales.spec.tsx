import { cleanup, render, screen } from '@testing-library/react'
import SectionSales from './SectionSales'

jest.mock('@preact/signals-react', () => ({ signal: (value: number) => ({ value }) }))

describe('<SectionSales />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<SectionSales />)

    const sectionSales = screen.getByTestId('section-sales')

    expect(sectionSales).toBeInTheDocument()
  })
})
