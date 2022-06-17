import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  gridArea: string;
}

function PaginationButton({ icon, gridArea, ...rest }: PaginationButtonProps) {
  return (
    <S.Container {...rest} gridArea={gridArea}>
      {icon}
    </S.Container>
  )
}

export default PaginationButton
