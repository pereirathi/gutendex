import { LinkWrapper } from 'components/LinkWrapper/LinkWrapper'
import { useFavorite } from 'hooks/useFavorite'
import notFoundIcon from '../../assets/not-found-icon.svg'
import emptyFavoriteIcon from '../../assets/favorite-empty.svg'
import favoriteIcon from '../../assets/favorite-filled.svg'
import { NotFound } from 'components/NotFound/NotFound'
import { IResult, IAuthor, IBooks } from 'services/api/types'
import { BOOKS_CARD as dict } from 'services/dict/appTexts'

import * as S from './styles'

const textCharacterLimit = 18
const titleCharacterLimit = 26

type BookCard = Omit<IResult, 'count' | 'next' | 'previous'>

interface IBookCardProps {
  bookID?: number
  bookDetails?: IBooks
  showDetails?: boolean
  children?: React.ReactNode
  booksData?: BookCard | undefined
}

const noResults = 0

const BookCard = ({ showDetails, booksData }: IBookCardProps) => {
  const id = booksData?.results.map((book) => book.id)
  const { isFavourited, handleToggleFavourite } = useFavorite({
    id: String(id),
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
          <S.BookTitle data-testid="book-title">{`${
            book.title.slice(0, titleCharacterLimit) +
            (book.title.length > titleCharacterLimit ? '...' : '')
          }`}</S.BookTitle>
          <S.BookContent>{`${dict.bookID}${book.id}`}</S.BookContent>
          <S.BookContent>
            {`${dict.bookAuthor}${book?.authors
              .map((author: IAuthor) => author.name)
              .join(', ')}`}
          </S.BookContent>
          <S.BookContent>{`${dict.bookDownloadCount}${book.download_count}`}</S.BookContent>
          {showDetails && (
            <>
              <S.BookContent>
                {`${dict.bookCopyright}${
                  book.copyright === true ? 'yes' : 'no'
                }`}
              </S.BookContent>
              <S.BookContent>
                {`${dict.bookLanguages}${book?.languages?.map(
                  (lan: string) => lan,
                )}`}
              </S.BookContent>
              <S.BookContent>
                {`${dict.bookBookshelves}${book.bookshelves.map(
                  (sub: string) => sub || 'none',
                )}`}
              </S.BookContent>
              <S.BookContent data-testid="book-subject">
                {`${dict.bookSubjects}${book?.subjects.map(
                  (sub: string) =>
                    sub.slice(0, textCharacterLimit) +
                    (book.title.length > textCharacterLimit ? '...' : ''),
                )}`}
              </S.BookContent>
            </>
          )}
        </LinkWrapper>
      </S.WrapperBookCard>
    ))
  )
}
export default BookCard
