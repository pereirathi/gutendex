import { Suspense } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from './styles/globals'
import { useBooksData } from './hooks/useBooksData'
import { CardsSkeleton } from './components/CardsSkeleton'
import emotionTheme from './styles/theme'

export function App() {
  const { data: booksData } = useBooksData()

  return (
    <>
      <ThemeProvider theme={{ ...emotionTheme }}>
        <Global styles={GlobalStyles} />
        <h1>Gutendex Book Search</h1>

        <Suspense fallback={<CardsSkeleton numberOfCards={25} speed={2} />}>
          <div className="book-wrapper">
            {booksData.map((book: any) => (
              <div key={book.id}>
                <p>{book?.title}</p>
              </div>
            ))}
          </div>
        </Suspense>
      </ThemeProvider>
    </>
  )
}
