import { Link } from 'react-router-dom'
import { IResult, IAuthor } from '../../services/api/types'
import * as S from './styles'

type BookCard = Omit<IResult, 'count' | 'next' | 'previous'>

interface IBookCardProps {
  bookID?: number
  showDetails?: boolean
  booksData?: BookCard | null
  children?: React.ReactNode
}

const textCharacterLimit = 10

const BookCard = ({ showDetails, booksData }: IBookCardProps) => {
  const ConditionalLink = ({ bookID, children }: IBookCardProps) => {
    return showDetails ? (
      <>{children}</>
    ) : (
      <Link to={`/book-details/${bookID}`}>{children}</Link>
    )
  }
  return booksData?.results.map((book) => (
    <S.WrapperBookCard key={book.id}>
      <ConditionalLink bookID={book.id}>
        <S.BookImg src={book.formats['image/jpeg']} />
        <S.ContentTitleCard>
          <S.BookTitle>{`${
            book.title.slice(0, textCharacterLimit) +
            (book.title.length > textCharacterLimit ? '...' : '')
          }`}</S.BookTitle>
        </S.ContentTitleCard>
        <S.BookContent>{`id: ${book.id}`}</S.BookContent>
        <S.BookContent>
          {`authors: ${book?.authors.map((author: IAuthor) => author.name)}`}
        </S.BookContent>
        <S.BookContent>{`downloads: ${book.download_count}`}</S.BookContent>
        {showDetails && (
          <>
            <S.BookContent>
              {`bookshelves: ${book.bookshelves.map((sub: string) => sub)}`}
            </S.BookContent>
            <S.BookContent>
              {`subjects: ${book?.subjects.map(
                (sub: string) =>
                  sub.slice(0, textCharacterLimit) +
                  (book.title.length > textCharacterLimit ? '...' : ''),
              )}`}
            </S.BookContent>
            <S.BookContent>
              {`copyright: ${book.copyright === true ? 'yes' : 'no'}`}
            </S.BookContent>
            <S.BookContent>
              {`languages: ${book?.languages?.map((lan: string) => lan)}`}
            </S.BookContent>
          </>
        )}
      </ConditionalLink>
    </S.WrapperBookCard>
  ))
}
export default BookCard
