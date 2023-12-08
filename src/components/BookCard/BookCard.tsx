import { Link } from 'react-router-dom'
import notFoundIcon from '../../assets/not-found-icon.svg'
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

const BookCard = ({ showDetails, booksData }: IBookCardProps) => {
  const ConditionalLink = ({ bookDetails, children }: IBookCardProps) => {
    return showDetails ? (
      <>{children}</>
    ) : (
      <Link to={`/book-details/${bookDetails?.id}`} state={{ bookDetails }}>
        {children}
      </Link>
    )
  }
  return booksData?.results.length === 0 ? (
    <NotFound />
  ) : (
    booksData?.results.map((book) => (
      <S.WrapperBookCard key={book.id}>
        <ConditionalLink bookDetails={book}>
          <S.BookImg
            src={book.formats['image/jpeg'] || notFoundIcon}
            alt={`images-{book.id}`}
          />
          <S.BookTitle>{`${
            book.title.slice(0, titleCharacterLimit) +
            (book.title.length > titleCharacterLimit ? '...' : '')
          }`}</S.BookTitle>
          <S.BookContent>{`${dict.bookID}${book.id}`}</S.BookContent>
          <S.BookContent>
            {`${dict.bookAuthor}${book?.authors.map(
              (author: IAuthor) => author.name,
            )}`}
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
                  (sub: string) => sub,
                )}`}
              </S.BookContent>
              <S.BookContent>
                {`${dict.bookSubjects}$: ${book?.subjects.map(
                  (sub: string) =>
                    sub.slice(0, textCharacterLimit) +
                    (book.title.length > textCharacterLimit ? '...' : ''),
                )}`}
              </S.BookContent>
            </>
          )}
        </ConditionalLink>
      </S.WrapperBookCard>
    ))
  )
}
export default BookCard
