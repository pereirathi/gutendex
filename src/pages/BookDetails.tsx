import { useNavigate, useParams } from 'react-router-dom'
import { useBooksProvider } from '../context/BooksContext'
import { IBooks, IAuthor } from '../types/types'

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
      return (
        <>
          <p>id: {seleletedBook?.id}</p>
          <p>title: {seleletedBook?.title}</p>
          <p>
            authors:{' '}
            {seleletedBook?.authors?.map((author: IAuthor) => author.name)}
          </p>
          <p>
            languages : {seleletedBook?.languages?.map((lan: string) => lan)}
          </p>
          <p>subjects: {seleletedBook?.subjects.map((sub: string) => sub)}</p>
          <p>
            bookshelves: {seleletedBook?.bookshelves.map((sub: string) => sub)}
          </p>
          <p>copyright : {seleletedBook?.copyright === true ? 'yes' : 'no'}</p>
          <p>downloads: {seleletedBook?.download_count}</p>
        </>
      )
    } else {
      return <p>Book not found</p>
    }
  }
  return (
    <div className="details-wrapper">
      <button onClick={() => navigate('/')}>Back to home</button>
      {renderBookDetails()}
    </div>
  )
}
