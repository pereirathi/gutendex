import { forwardRef } from 'react'

interface IinputProps {
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = forwardRef<HTMLInputElement, IinputProps>((props, ref) => {
  const { value, placeholder, onChange } = props

  return (
    <div className="search-bar">
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
})
Search.displayName = 'Search'
export default Search
