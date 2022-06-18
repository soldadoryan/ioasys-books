import { fireEvent, render } from '@testing-library/react'
import Login from '.'

test('Login page', () => {
  expect(1 + 1).toBe(2)
  const { getByTestId, getByText } = render(<Login />)
  const inputEmail = getByTestId('input-email')
  const inputPassword = getByTestId('input-password')
  const formLogin = getByTestId('form-login')

  fireEvent.change(inputEmail, { target: { value: 'desafio@ioasys.com.br' } })
  fireEvent.change(inputPassword, { target: { value: '12341234' } })
  fireEvent.submit(formLogin)
})
