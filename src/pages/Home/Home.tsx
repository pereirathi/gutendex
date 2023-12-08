import {
  lazy,
  useRef,
  useState,
  useTransition,
  useDeferredValue,
  ChangeEvent,
} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useBooksData } from 'hooks/useBooksData'

import { generateKey } from 'services/helpers/helpers'
import { Skeleton } from 'components/Skeleton/Skeleton'
import { HOME_PAGE as dict } from 'services/dict/appTexts'

import * as S from './styles'

const Search = lazy(() => import('components/Search/Search'))
const BookCard = lazy(() => import('components/BookCard/BookCard'))

export const Home = () => {
  const inputRef = useRef(null)
  const [book, setBook] = useState<string>('')
  const deferredBookState = useDeferredValue(book)
  const [isPending, startTransition] = useTransition()

  const { data, fetchNextPage, hasNextPage } = useBooksData({
    searchTermTyped: deferredBookState,
  })

  const handleOnchangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setBook(e.target.value)
    startTransition(() => {})
  }

  return (
    <>
      <Search
        ref={inputRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOnchangeSearch(e)
        }
        value={book}
        placeholder={dict.searchPlaceHolder}
      />
      {isPending ? (
        <Skeleton numberOfCards={32} speed={2} />
      ) : (
        <InfiniteScroll
          dataLength={data?.pages.length * 32}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Skeleton numberOfCards={4} speed={3} />}
        >
          <S.WrapperInfiniteScroll key={generateKey()}>
            {data?.pages.map((pageData, index) => (
              <BookCard showDetails={false} booksData={pageData} key={index} />
            ))}
          </S.WrapperInfiniteScroll>
        </InfiniteScroll>
      )}
    </>
  )
}
