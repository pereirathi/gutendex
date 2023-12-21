import { useEffect, useState } from 'react'

import { LinkWrapper } from 'components/BookCard/components/LinkWrapper/LinkWrapper'
import { BookDetailsContent } from 'components/BookCard/components/BookContent/BookDetailsContent'
import { BookDefaultContent } from 'components/BookCard/components/BookContent/BookDefaultContent'

import notFoundIcon from 'resources/not-found-icon.svg'
import favoriteIcon from 'resources/favorite-filled.svg'
import { NotFound } from 'components/NotFound/NotFound'
import emptyFavoriteIcon from 'resources/favorite-empty.svg'

import { useFavorite } from 'hooks/useFavorite'
import { IResult } from 'services/api/types'

import * as S from './styles'

const noResults = 0

type BookCard = Omit<IResult, 'count' | 'next' | 'previous'>

interface IBookCardProps {
  showDetails: boolean
  booksData: BookCard | undefined
}

const BookCard = ({ showDetails, booksData }: IBookCardProps) => {
  const [isFavoriteChange, setIsFavoriteChange] = useState(false)
  const { getFavoritesBooks, favoritesList, addBookToFavorites } = useFavorite()

  useEffect(() => {
    if (isFavoriteChange) {
      getFavoritesBooks()
      setIsFavoriteChange(false)
    }
  }, [getFavoritesBooks, isFavoriteChange])

  return booksData?.results.length === noResults ? (
    <NotFound />
  ) : (
    booksData?.results.map((book) => (
      <S.WrapperBookCard
        key={book.id}
        data-testid="book-card"
        showDetails={showDetails}
      >
        <S.BookCardImgSection>
          <S.BookImg
            src={book.formats['image/jpeg'] || notFoundIcon}
            alt={`images-{book.id}`}
          />
          <S.FavoriteBookButton
            data-testid="book-favourite"
            onClick={() => {
              addBookToFavorites({ id: book.id })
              setIsFavoriteChange(true)
            }}
          >
            <S.FavoriteIcon
              src={
                favoritesList?.includes(book.id)
                  ? favoriteIcon
                  : emptyFavoriteIcon
              }
            />
          </S.FavoriteBookButton>
        </S.BookCardImgSection>
        <LinkWrapper bookDetails={book} isToShowDetails={showDetails}>
          <BookDefaultContent book={book} />
          {showDetails && <BookDetailsContent book={book} />}
        </LinkWrapper>
      </S.WrapperBookCard>
    ))
  )
}
export default BookCard
