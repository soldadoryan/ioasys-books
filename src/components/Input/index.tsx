import React, { InputHTMLAttributes } from 'react'
import { Controller } from 'react-hook-form'
import Tooltip from '../Tooltip'
import * as S from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  label: string;
  error?: string;
  control?: any;
  name: string
}

function Input({
  children,
  id,
  label,
  error,
  name,
  control,
  ...rest
}: InputProps) {
  return (
    <>
      <S.Container>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <>
              <S.WrapInput>
                <S.Label htmlFor={id}>{label}</S.Label>
                <S.Input {...rest} {...field} />
              </S.WrapInput>
              {children && (
                <S.WrapButton>
                  {children}
                </S.WrapButton>
              )}
            </>
          )}
        />
      </S.Container>
      {error && <Tooltip message={error} />}
    </>
  )
}

export default Input
