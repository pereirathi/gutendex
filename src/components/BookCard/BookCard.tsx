import { LinkWrapper } from 'components/BookCard/components/LinkWrapper/LinkWrapper'
import { BookDetailsContent } from 'components/BookCard/components/BookContent/BookDetailsContent'
import { BookDefaultContent } from 'components/BookCard/components/BookContent/BookDefaultContent'
import { useFavorite } from 'hooks/useFavorite'

import notFoundIcon from 'resources/not-found-icon.svg'
import favoriteIcon from 'resources/favorite-filled.svg'
import { NotFound } from 'components/NotFound/NotFound'
import emptyFavoriteIcon from 'resources/favorite-empty.svg'

import { IResult } from 'services/api/types'

import * as S from './styles'

const noResults = 0

type BookCard = Omit<IResult, 'count' | 'next' | 'previous'>

interface IBookCardProps {
  showDetails: boolean
  booksData: BookCard | undefined
}

const BookCard = ({ showDetails, booksData }: IBookCardProps) => {
  const { isFavourited, handleToggleFavourite } = useFavorite({
    id: () => booksData?.results.map((book) => book.id).toString() || '',
  })

  return booksData?.results.length === noResults ? (
    <NotFound />
  ) : (
    booksData?.results.map((book) => (
      <S.WrapperBookCard
        key={book.id}
        data-testid="book-card"
        showDetails={showDetails}
      >
        <LinkWrapper bookDetails={book} isToShowDetails={showDetails}>
          <S.BookCardImgSection>
            <S.BookImg
              src={book.formats['image/jpeg'] || notFoundIcon}
              alt={`images-{book.id}`}
            />
            <S.FavoriteBookButton
              data-testid="book-favourite"
              onClick={handleToggleFavourite}
            >
              <S.FavoriteIcon
                src={isFavourited ? emptyFavoriteIcon : favoriteIcon}
              />
            </S.FavoriteBookButton>
          </S.BookCardImgSection>

          <BookDefaultContent book={book} />
          {showDetails && <BookDetailsContent book={book} />}
        </LinkWrapper>
      </S.WrapperBookCard>
    ))
  )
}
export default BookCard
