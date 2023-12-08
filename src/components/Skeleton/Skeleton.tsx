import ContentLoader from 'react-content-loader'
import * as S from './styles'

interface SkeletonProps {
  speed: number
  numberOfCards: number
}

export const Skeleton = ({ numberOfCards, speed }: SkeletonProps) => {
  const cardsSkeleton = new Array(numberOfCards).fill('')

  return (
    <S.SkeletonContainer>
      {cardsSkeleton.map((_, index) => (
        <S.SummaryCard
          id={`${numberOfCards}-${speed}-${index}`}
          key={`${numberOfCards}-${speed}-${index}`}
        >
          <ContentLoader speed={speed} width="50%" height="75px">
            <rect x="2" y="0" rx="6" ry="6" width="100%" height="100%" />
          </ContentLoader>
          <ContentLoader speed={speed} width="100%" height="20px">
            <rect x="2" y="0" rx="6" ry="6" width="90%" height="100%" />
          </ContentLoader>
          <ContentLoader speed={speed} width="25%" height="10px">
            <rect x="2" y="0" rx="6" ry="6" width="90%" height="100%" />
          </ContentLoader>
          <ContentLoader speed={speed} width="76%" height="15px">
            <rect x="2" y="0" rx="6" ry="6" width="90%" height="100%" />
          </ContentLoader>
          <ContentLoader speed={speed} width="45%" height="10px">
            <rect x="2" y="0" rx="6" ry="6" width="90%" height="100%" />
          </ContentLoader>
        </S.SummaryCard>
      ))}
    </S.SkeletonContainer>
  )
}
