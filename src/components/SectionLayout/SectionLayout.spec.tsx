import { cleanup, render, screen } from '@testing-library/react'
import SectionLayout from './SectionLayout'

jest.mock('@preact/signals-react', () => ({ signal: (value: number) => ({ value }) }))

describe('<SectionLayout />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<SectionLayout />)

    const sectionLayout = screen.getByTestId('section-layout')

    expect(sectionLayout).toBeInTheDocument()
  })
})
