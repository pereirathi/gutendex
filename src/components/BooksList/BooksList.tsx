import { Link } from 'react-router-dom'
import { IBooks, IAuthor } from '../../types/types'

interface IBooksDataProps {
  booksData: {
    pages: {
      results: IBooks[]
    }[]
  } | null
}

const BooksList = ({ booksData }: IBooksDataProps) => {
  return (
    <div className="book-wrapper">
      {booksData?.pages[0].results.map((book: IBooks) => (
        <div key={book.id}>
          <Link to={`/book-details/${book.id}`}>
            <p>id: {book?.id}</p>
            <p>title: {book?.title}</p>
            {book?.authors.map((author: IAuthor) => <p key={author.name}></p>)}
            <p>downloads: {book?.download_count}</p>
          </Link>
          <br />
        </div>
      ))}
    </div>
  )
}
export default BooksList
