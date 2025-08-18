import { render, screen } from '@testing-library/react'
import GetText from './GetText'
import { expect, test } from 'vitest'

test('renders hello text', () => {
  render(<GetText/>)

  const headingElement = screen.getByText(/Hello React Students!/i)

  expect(headingElement).toBeInTheDocument()
})