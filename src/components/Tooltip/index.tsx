import * as S from './styles'

export type TooltipProps = {
  message?: string
}

function Tooltip({ message }: TooltipProps) {
  return (
    <>
      {message && message !== '' && (
        <S.Container>
          {message}
        </S.Container>
      )}
    </>
  )
}

export default Tooltip
