import { Global, ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { GlobalStyles } from './styles/globals'
import { AppRoutes } from './services/routes/AppRoutes'
import { GlobalContext } from './context/GlobalContext'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { ErrorBoundary as ErrorBoundaryWrapper } from 'react-error-boundary'

import emotionTheme from './styles/theme'

export function App() {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <>
      <GlobalContext>
        <ThemeProvider theme={{ ...emotionTheme }}>
          <Global styles={GlobalStyles} />
          <BrowserRouter>
            <ErrorBoundaryWrapper
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <ErrorBoundary resetErrorBoundary={resetErrorBoundary} />
              )}
            >
              <AppRoutes />
            </ErrorBoundaryWrapper>
          </BrowserRouter>
        </ThemeProvider>
      </GlobalContext>
    </>
  )
}
