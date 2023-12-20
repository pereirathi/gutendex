import { IBooks } from 'services/api/types'
import { BOOKS_CARD as dict } from 'services/dict/appTexts'

import * as S from '../../styles'

const textCharacterLimit = 18

export const BookDetailsContent = ({ book }: { book: IBooks }) => {
  return (
    <>
      <S.BookContent>
        {`${dict.bookCopyright}${book.copyright === true ? 'yes' : 'no'}`}
      </S.BookContent>
      <S.BookContent>
        {`${dict.bookLanguages}${book?.languages?.map((lan: string) => lan)}`}
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
  )
}
