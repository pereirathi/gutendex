import { BooksProvider } from './BooksContext'

interface GlobalContextProps {
  children: React.ReactNode
}

export function GlobalContext({ children }: GlobalContextProps) {
  return <BooksProvider>{children}</BooksProvider>
}
