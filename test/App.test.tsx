import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../src/App'

describe('<App />', () => {
  // test('should work', () => {
  //   const { getByText } = render(<App />)
  //   screen.debug()

  //   expect(
  //     getByText('Prueba técnica de React')
  //   ).toBeDefined()
  // })

  // Test end to end
  test('should add items and remove them', async () => {
    const user = userEvent.setup()

    render(<App />)

    // Search input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // serch a button into the form
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    const button = form.querySelector('button')
    expect(button).toBeDefined()

    await user.type(input, 'midudevice')
    await user.click(button!)

    const randomText = crypto.randomUUID()
    await user.type(input, randomText)
    await user.click(button!)

    // Check if item has been added
    const list = screen.getByRole('list')
    expect(list).toBeDefined()
    expect(list.childNodes.length).toBe(2)

    // Remove item
    const item = screen.getByText(randomText)
    expect(item).toBeDefined()

    const removeButton = item.querySelector('button')
    expect(removeButton).toBeDefined()

    await user.click(removeButton!)
    expect(list.childNodes.length).toBe(1)

    // Check not results
    const removeButton2 = item.querySelector('button')
    expect(removeButton2).toBeDefined()
    await user.click(removeButton2!)

    const noResults = screen.findByText('No hay elementos en la lista.')
    expect(noResults).toBeDefined()
  })
})