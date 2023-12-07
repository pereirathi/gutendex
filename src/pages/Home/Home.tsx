import { lazy, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useBooksData } from '../../hooks/useBooksData'
import { useBooksProvider } from '../../context/BooksContext'

import * as S from './styles'

const Search = lazy(() => import('../../components/Search/Search'))
const BookCard = lazy(() => import('../../components/BookCard/BookCard'))

export const Home = () => {
  const inputRef = useRef(null)
  const [book, setBook] = useState<string>('')
  const { handleSetBookDetails } = useBooksProvider()

  const { data, fetchNextPage, isSuccess, error, status, hasNextPage } =
    useBooksData({
      searchTermTyped: book,
    })

  const saveBookDetailsAtContext = () => {
    handleSetBookDetails(data.pages[0])
  }

  const generateKey = () => {
    return `$rand_${new Date().getTime()}`
  }

  useEffect(() => {
    if (isSuccess) {
      saveBookDetailsAtContext()
    }
  }, [isSuccess])

  console.log(data)
  console.log(isSuccess)

  return (
    <>
      {status === 'error' ? (
        toast.error(`${error?.message}`)
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

          <InfiniteScroll
            dataLength={data?.pages.length * 32}
            next={() => {
              fetchNextPage()
              console.log('fetching more data')
            }}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
          >
            <S.WrapperInfiniteScroll key={generateKey()}>
              {data?.pages.map((pageData, index) => (
                <BookCard
                  showDetails={false}
                  booksData={pageData}
                  key={index}
                />
              ))}
            </S.WrapperInfiniteScroll>
          </InfiniteScroll>
        </>
      )}
    </>
  )
}
