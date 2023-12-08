import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ErrorBoundaryImg = styled.img`
  margin-top: ${theme.sizes.Space5X};
`

export const ErrorBoundaryDescription = styled.p`
  margin: ${theme.sizes.Space5X};
  font-size: 24px;
  font-weight: 900;
`
