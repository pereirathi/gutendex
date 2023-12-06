import { Global, ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/globals'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { AppRoutes } from './services/routes/AppRoutes'
import { GlobalContext } from './context/GlobalContext'

import emotionTheme from './styles/theme'

export function App() {
  return (
    <>
      <GlobalContext>
        <ThemeProvider theme={{ ...emotionTheme }}>
          <Global styles={GlobalStyles} />
          <BrowserRouter>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </BrowserRouter>
        </ThemeProvider>
      </GlobalContext>
    </>
  )
}
