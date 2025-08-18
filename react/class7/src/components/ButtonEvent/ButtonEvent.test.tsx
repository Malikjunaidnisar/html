// ButtonEvent.test.js
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonEvent from './ButtonEvent'
import { expect, test } from 'vitest'

test('increments counter when button is clicked', () => {
  render(<ButtonEvent />)
  const button = screen.getByRole('button', { name: /click me/i })
  fireEvent.click(button)
  expect(screen.getByText(/You clicked 1 times/i)).toBeInTheDocument()
})