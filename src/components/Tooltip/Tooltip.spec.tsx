import { cleanup, render, screen } from '@testing-library/react'
import Tooltip from './Tooltip'

jest.mock('@preact/signals-react', () => ({ signal: (value: number) => ({ value }) }))

describe('<Tooltip />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Tooltip />)

    const tooltip = screen.getByTestId('tooltip')

    expect(tooltip).toBeInTheDocument()
  })
})
