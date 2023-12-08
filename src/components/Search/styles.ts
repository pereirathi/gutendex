import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: ${theme.sizes.Space3X}; 0;
`

export const Input = styled.input`
  height: 48px;
  width: 50%;
  box-sizing: border-box;
  appearance: none;
  border-radius: 48px;
  border: 1px solid ${theme.colors.GrayLight};
  outline: none;
  color: ${theme.colors.Black};
  padding-left: ${theme.sizes.Space3X};
  padding-right: ${theme.sizes.Space2X};
  font-size: ${theme.sizes.Space3X};

  &:focus {
    border: 1px solid ${theme.colors.GrayDark};
  }
  &::placeholder {
    color: ${theme.colors.GrayMedium};
  }
`
