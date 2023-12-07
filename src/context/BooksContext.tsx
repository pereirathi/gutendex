import { createContext, useContext, useState, useCallback } from 'react'
import { IResult } from '../services/api/types'

interface BooksProviderProps {
  children: React.ReactNode
}
interface ContextProps {
  bookDetails: IResult
  handleSetBookDetails: (newBookDetails: IResult) => void
}
const INITIAL_VALUE = {} as IResult

const BooksContext = createContext({} as ContextProps)

export function BooksProvider({ children }: BooksProviderProps) {
  const [bookDetails, setBookDetails] = useState(INITIAL_VALUE)

  const handleSetBookDetails = useCallback((newBookDetails: IResult) => {
    setBookDetails((state) => ({ ...state, ...newBookDetails }))
  }, [])

  return (
    <BooksContext.Provider
      value={{
        bookDetails,
        handleSetBookDetails,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export const useBooksProvider = () => useContext(BooksContext)
