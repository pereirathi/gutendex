import { ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return <>{children}</>
}
