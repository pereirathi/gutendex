import { IBooks, IAuthor } from 'services/api/types'
import { BOOKS_CARD as dict } from 'services/dict/appTexts'

import * as S from '../../styles'

const titleCharacterLimit = 26

export const BookDefaultContent = ({ book }: { book: IBooks }) => {
  return (
    <>
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
    </>
  )
}
