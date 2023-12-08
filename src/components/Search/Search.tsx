import { forwardRef } from 'react'
import * as S from './styles'

interface IinputProps {
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = forwardRef<HTMLInputElement, IinputProps>((props, ref) => {
  const { value, placeholder, onChange } = props

  return (
    <S.InputWrapper>
      <S.Input
        data-testid="search-input"
        ref={ref}
        type="search"
        name="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.InputWrapper>
  )
})
Search.displayName = 'Search'
export default Search
