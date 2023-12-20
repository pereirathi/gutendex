import { Link } from 'react-router-dom'
import { IBooks } from 'services/api/types'

interface IBookCardProps {
  isToShowDetails?: boolean
  bookID?: number
  bookDetails?: IBooks
  showDetails?: boolean
  children?: React.ReactNode
}

export const LinkWrapper = ({
  bookDetails,
  isToShowDetails,
  children,
}: IBookCardProps) => {
  return isToShowDetails ? (
    <>{children}</>
  ) : (
    <Link to={`/book-details/${bookDetails?.id}`} state={{ bookDetails }}>
      {children}
    </Link>
  )
}
