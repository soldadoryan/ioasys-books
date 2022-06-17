import React from 'react'
import * as S from './styles'
import LogoLight from '../../assets/logo_light.png'
import LogoDark from '../../assets/logo_dark.png'

export type LogoType = {
  layout: 'dark' | 'light';
}

function Logo({ layout }: LogoType) {
  return (
    <S.Container>
      <S.Image src={layout === 'dark' ? LogoDark : LogoLight} />
      <S.Title layout={layout}>Books</S.Title>
    </S.Container>
  )
}

export default Logo
