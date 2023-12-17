import { cleanup, render, screen } from '@testing-library/react'
import Counter from './Counter'

jest.mock('@preact/signals-react', () => ({ signal: (value: number) => ({ value }) }))

describe('<Counter />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Counter />)

    const counter = screen.getByTestId('counter')

    expect(counter).toBeInTheDocument()
  })
})
