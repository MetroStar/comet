import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

test('Button renders with given props', () => {
  const spy = jest.fn()
  render(<Button onClick={spy} label="foo" />)
  expect(screen.getByText('foo')).toBeVisible()

  fireEvent.click(screen.getByTestId("button"))
  expect(spy).toHaveBeenCalled()
})
