import { useNavigate } from 'react-router-dom'
import notFoundImg from '../../assets/wrong-img.png'
import notFoundIcon from '../../assets/not-found-icon.svg'
import { NOT_FOUND as dict } from '../../services/dict/appTexts'
import { Button } from '../Button/Button'

import * as S from './styles'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <S.NotFoundContainer aria-label="not found">
      <S.NotFoundIcon src={notFoundIcon} alt="not-found-icon"></S.NotFoundIcon>
      <S.NotfoundDescription
        aria-label="not found book or page"
        data-testid="not-found"
      >
        {dict.notfoundDescription}
      </S.NotfoundDescription>
      <S.NotFoundImg src={notFoundImg} alt="not-found-img"></S.NotFoundImg>
      <Button
        onClick={() => {
          navigate('/')
          navigate(0)
        }}
      >
        {' '}
        {dict.backToHome}{' '}
      </Button>
    </S.NotFoundContainer>
  )
}
