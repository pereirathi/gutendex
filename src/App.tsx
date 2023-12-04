import { Global, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from './styles/globals'
import emotionTheme from './styles/theme'

export function App() {
  return (
    <>
      <ThemeProvider theme={{ ...emotionTheme }}>
        <Global styles={GlobalStyles} />
        <h1>Gutendex Book Search</h1>
      </ThemeProvider>
    </>
  )
}
