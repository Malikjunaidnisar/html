import { render, screen, fireEvent } from '@testing-library/react'
import InputEvent from './InputEvent'
import { expect, test } from 'vitest'

test('updates text on typing', () => {
  render(<InputEvent />)
  const input = screen.getByPlaceholderText(/type something/i)
  fireEvent.change(input, { target: { value: 'Reacts Rocks' } })
  expect(screen.getByText(/You typed: Reacts Rocks/i)).toBeInTheDocument()
})