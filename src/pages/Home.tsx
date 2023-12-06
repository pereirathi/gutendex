import { lazy, useEffect, useRef, useState } from 'react'
import { useBooksData } from '../hooks/useBooksData'
import { useBooksProvider } from '../context/BooksContext'
import { toast } from 'react-toastify'

const Search = lazy(() => import('../components/Search/Search'))
const BooksList = lazy(() => import('../components/BooksList/BooksList'))

export const Home = () => {
  const inputRef = useRef(null)
  const [book, setBook] = useState<string>('')
  const { handleSetBookDetails } = useBooksProvider()

  const { data, fetchNextPage, isSuccess, isError } = useBooksData({
    searchTermTyped: book,
  })

  const saveBookDetailsAtContext = () => {
    handleSetBookDetails(data.pages[0])
  }

  useEffect(() => {
    if (isSuccess) {
      saveBookDetailsAtContext()
    }
  }, [isSuccess])

  console.log('isError msg', isError)

  return (
    <>
      {isError ? (
        toast.error('Something went wrong!')
      ) : (
        <>
          <Search
            ref={inputRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBook(e.target.value)
            }
            value={book}
            placeholder={'Search here your book...'}
          />
          <BooksList booksData={data} />
          <button
            onClick={() => {
              fetchNextPage()
            }}
          >
            Load More
          </button>
        </>
      )}
    </>
  )
}
