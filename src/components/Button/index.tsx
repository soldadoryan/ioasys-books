import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading: boolean;
}

function Button({ label, isLoading }: ButtonProps) {
  return (
    <S.Container disabled={isLoading}>
      {isLoading ? <S.Loading /> : label}
    </S.Container>
  )
}

export default Button
