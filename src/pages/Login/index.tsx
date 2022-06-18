import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import * as S from './styles'
import useAuth from '../../hooks/useAuth'
import Tooltip from '../../components/Tooltip'

export type FormLoginData = {
  email: string;
  password: string;
}

function Login() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const { handleLogin } = useAuth()
  const defaultValues = {
    email: '',
    password: ''
  }
  const { handleSubmit, formState: { errors }, control } = useForm<FormLoginData>({
    resolver: yupResolver(yup.object({
      email: yup.string()
        .email('Você precisa adicionar um e-mail válido!').required('Este campo não pode estar vazio!'),
      password: yup.string().required('Este campo não pode estar vazio!'),
    }).required()),
    defaultValues
  })

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    await handleLogin(data, setMessage)
    setLoading(false)
  })

  return (
    <S.Container>
      <S.Wrap>
        <S.Form data-testid="form-login" onSubmit={onSubmit}>
          <S.WrapLogo>
            <Logo layout="light" />
          </S.WrapLogo>
          <Input
            data-testid="input-email"
            name="email"
            id="input_email"
            label="E-mail"
            error={errors.email?.message}
            control={control}
          />
          <Input
            data-testid="input-password"
            name="password"
            id="input_password"
            label="Password"
            error={errors.password?.message}
            control={control}
            type="password"
          >
            <Button label="Entrar" type="submit" isLoading={loading} />
          </Input>
          <Tooltip message={message} />
        </S.Form>
      </S.Wrap>
    </S.Container>
  )
}

export default Login
