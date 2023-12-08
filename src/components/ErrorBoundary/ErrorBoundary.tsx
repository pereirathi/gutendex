import notFoundImg from '../../assets/wrong-img.png'
import { Button } from 'components/Button/Button'
import { ERROR_BOUNDARY as dict } from 'services/dict/appTexts'

import * as S from './styles'

interface ErrorBoundaryProps {
  resetErrorBoundary: () => void
}

export const ErrorBoundary = ({ resetErrorBoundary }: ErrorBoundaryProps) => {
  return (
    <S.ErrorBoundaryContainer>
      <S.ErrorBoundaryDescription>
        {dict.errorBoundaryDescription}
      </S.ErrorBoundaryDescription>
      <Button onClick={() => resetErrorBoundary()}> {dict.tryAgain} </Button>
      <S.ErrorBoundaryImg
        src={notFoundImg}
        alt="not-found-img"
      ></S.ErrorBoundaryImg>
    </S.ErrorBoundaryContainer>
  )
}
