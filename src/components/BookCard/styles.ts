import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

type ShowDetailsProps = {
  showDetails?: boolean | undefined
}

export const WrapperBookCard = styled('div')<ShowDetailsProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.White};
  width: ${(props) => (props.showDetails ? '400px' : '200px')};
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
    width: ${(props) => props.showDetails && '250px'};
  }
`
export const BookTitle = styled.p`
  text-decoration: none;
  font-size: 16px;
  font-weight: 900;
  line-height: 20px;
  margin-top: ${theme.sizes.Space1X};

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
    font-weight: 400;
  }
`

export const FavoriteBookButton = styled.button`
  border: none;
  background-color: transparent;
`

export const FavoriteIcon = styled.img`
  width: 33px;
  height: 33px;
`

export const BookCardImgSection = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BookImg = styled.img`
  margin-bottom: ${theme.sizes.Space1X};
  width: 66px;
  height: 100px;
`
