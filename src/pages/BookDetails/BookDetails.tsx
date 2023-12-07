import { useNavigate, useParams } from 'react-router-dom'
import { useBooksProvider } from '../../context/BooksContext'
import { NotFound } from '../../components/NotFound/NotFound'
import BookCard from '../../components/BookCard/BookCard'
import { IBooks } from '../../services/api/types'
import { Button } from '../../components/Button/Button'
import { NOT_FOUND as dict } from '../../services/dict/appTexts'

import * as S from './styles'

export const BookDetails = () => {
  const params = useParams()
  const bookId = params.bookId
  const navigate = useNavigate()
  const { bookDetails } = useBooksProvider()

  const seleletedBook = bookDetails?.results?.find(
    (book: IBooks) => book.id === Number(bookId),
  )

  const renderBookDetails = () => {
    if (seleletedBook) {
      const filteredBook = { results: [seleletedBook] }
      return (
        <>
          <BookCard showDetails booksData={filteredBook} />
        </>
      )
    } else {
      return <NotFound />
    }
  }
  return (
    <S.BookDetailsContainer>
      <h2>Book Details</h2>
      {renderBookDetails()}
      <Button onClick={() => navigate('/')}> {dict.backToHome} </Button>
    </S.BookDetailsContainer>
  )
}
