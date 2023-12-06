import ContentLoader from 'react-content-loader'
import * as S from './styles'

interface CardsSkeletonProps {
  numberOfCards: number
  speed: number
}

export const CardsSkeleton = ({ numberOfCards, speed }: CardsSkeletonProps) => {
  const cardsSkeleton = new Array(numberOfCards).fill('')

  return cardsSkeleton.map((_, index) => (
    <S.SummaryCard
      id={`${numberOfCards}-${speed}-${index}`}
      key={`${numberOfCards}-${speed}-${index}`}
    >
      <ContentLoader speed={speed} width="80%" height="40px">
        <rect x="2" y="0" rx="6" ry="6" width="90%" height="100%" />
      </ContentLoader>

      <ContentLoader speed={speed} width="70%" height="75px">
        <rect x="2" y="0" rx="6" ry="6" width="100%" height="100%" />
      </ContentLoader>
    </S.SummaryCard>
  ))
}
