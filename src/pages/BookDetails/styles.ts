import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const BookDetailsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: ${theme.sizes.Space3X} 0;
  color: ${theme.colors.Black};
`

export const BookDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const BookDetailsPageTitle = styled.h2`
  color: ${theme.colors.Black};
  font-size: 28px;
`

export const BookAnimation = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`
export const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: ${theme.sizes.Space1X};
  @media (max-width: 768px) {
    width: 0px;
    height: 0px;
  }
`

export const BookDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${theme.sizes.Space3X};
`
