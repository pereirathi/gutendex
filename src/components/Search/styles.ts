import styled from '@emotion/styled'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 16px 0;
`

export const Input = styled.input`
  height: 48px;
  width: 50%;
  box-sizing: border-box;
  appearance: none;
  border-radius: 48px;
  border: 1px solid #e6e6e6;
  outline: none;
  color: $#778899;
  padding-left: 16px;
  font-size: 16px;

  &:focus {
    border: 1px solid #a9a9a9;
  }
  &::placeholder {
    color: #ccc;
  }
`
