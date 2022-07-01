import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('Pruebas en <AddCategory />', () => {
  const inputValue = 'Saitama'

  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: inputValue } })

    expect(input.value).toBe('Saitama')
    // screen.debug();
  })

  test('debe de llamar a onNewCategory si el input tiene un valor', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    //screen.debug();
  })

  test('no debe de llamar a onNewCategory si el input tiene esta vacio', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()

    //screen.debug();
  })
})
