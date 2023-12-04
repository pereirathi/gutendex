import { createContext, useContext, useState, useMemo } from 'react'

interface ContextProps {
  favorites: boolean
  attributes: string
  setFavorites: (value: string) => void
  setAttributes: (value: string) => void
}

// const INITIAL_VALUE = {}

const BooksContext = createContext<ContextProps>({} as ContextProps)

interface BooksProviderProps {
  children: React.ReactNode
}

export function BooksProvider({ children }: BooksProviderProps) {
  const [favorites, setFavorites] = useState('')
  const [attributes, setAttributes] = useState('')

  const booksProviderValue = useMemo(
    () => ({
      favorites,
      attributes,
      setFavorites,
      setAttributes,
    }),
    [attributes, setAttributes, favorites, setFavorites],
  )

  return (
    <BooksContext.Provider value={booksProviderValue}>
      {children}
    </BooksContext.Provider>
  )
}

export const useBooksProvider = () => useContext(BooksContext)
