import { cleanup, render, screen } from '@testing-library/react'
import Main from './Main'

jest.mock('@preact/signals-react', () => ({ signal: (value: number) => ({ value }) }))

describe('<Main />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Main />)

    const main = screen.getByTestId('main')

    expect(main).toBeInTheDocument()
  })
})
