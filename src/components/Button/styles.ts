import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.Black};
  width: auto;
  min-width: 100px;
  max-width: 100%;
  font-size: 14px;
  height: 48px;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 48px;
  padding: ${theme.sizes.Space3X} ${theme.sizes.Space4X};
  margin: ${theme.sizes.Space2X} 0;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding: ${theme.sizes.Space1X} ${theme.sizes.Space2X};
  }
`
