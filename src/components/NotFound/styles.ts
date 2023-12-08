import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundImg = styled.img`
  margin: ${theme.sizes.Space3X};
`

export const NotfoundDescription = styled.p`
  font-size: 16px;
  font-weight: 700;
`
export const NotFoundIcon = styled.img`
  margin: ${theme.sizes.Space3X};
  width: 60px;
  height: 60px;
`
