import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const BookDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  margin: ${theme.sizes.Space3X} 0;
  color: ${theme.colors.Black};
`

export const BookDetailsPageTitle = styled.h2`
  margin: ${theme.sizes.Space3X} 0;
  color: ${theme.colors.Black};
`
