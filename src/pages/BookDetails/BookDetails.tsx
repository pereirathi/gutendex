import { useNavigate, useLocation } from 'react-router-dom'
import { NotFound } from 'components/NotFound/NotFound'
import BookCard from 'components/BookCard/BookCard'
import { Button } from 'components/Button/Button'
import {
  BOOK_DETAILS as dict,
  GENERIC_TEXT as genericDict,
} from 'services/dict/appTexts'

import * as S from './styles'

export const BookDetails = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const renderBookDetails = () => {
    if (state.bookDetails) {
      const filteredBook = { results: [state.bookDetails] }
      return (
        <>
          <BookCard showDetails booksData={filteredBook} />
          <Button onClick={() => navigate('/')}>
            {' '}
            {genericDict.backToHome}{' '}
          </Button>
        </>
      )
    } else {
      return <NotFound />
    }
  }
  return (
    <S.BookDetailsContainer>
      <S.BookDetailsPageTitle>{dict.bookDetailsTitle}</S.BookDetailsPageTitle>
      {renderBookDetails()}
    </S.BookDetailsContainer>
  )
}
