import * as S from './styles'

type Props = {
  type?: 'button'
  onClick?: () => void
  children: React.ReactNode
}

export const Button = ({ onClick, type = 'button', children }: Props) => {
  return (
    <S.ButtonContainer type={type} onClick={onClick}>
      {' '}
      {children}{' '}
    </S.ButtonContainer>
  )
}
