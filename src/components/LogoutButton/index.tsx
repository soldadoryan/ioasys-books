import { ButtonHTMLAttributes } from 'react'
import { MdLogout } from 'react-icons/md'
import * as S from './styles'

type LogoutButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function LogoutButton({ ...rest }: LogoutButtonProps) {
  return (
    <S.Container {...rest}>
      <MdLogout />
    </S.Container>
  )
}

export default LogoutButton
