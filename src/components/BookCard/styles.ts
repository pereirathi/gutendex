import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const WrapperBookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.White};
  width: 200px;
  min-height: 240px;
  max-height: 600px;
  border-radius: 10px;
  margin: ${theme.sizes.Space3X};
  padding: ${theme.sizes.Space3X};
  box-sizing: border-box;
  overflow: hidden;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`
export const BookTitle = styled.p`
  text-decoration: none;
  font-size: 16px;
  font-weight: 900;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 700;
  }
`
export const BookContent = styled.p`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: ${theme.sizes.Space1X};
  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 4s00;
  }
`

export const BookImg = styled.img`
  margin-bottom: ${theme.sizes.Space1X};
  width: 66px;
  height: 100px;
`
