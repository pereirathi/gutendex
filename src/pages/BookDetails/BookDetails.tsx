import { useNavigate, useLocation } from 'react-router-dom'
import { NotFound } from 'components/NotFound/NotFound'
import BookCard from 'components/BookCard/BookCard'
import backIcon from '../../assets/back-icon.svg'
import bookAnimation from '../../assets/book.gif'
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
      return <BookCard showDetails booksData={filteredBook} />
    } else {
      return <NotFound />
    }
  }
  return (
    <S.BookDetailsContainer>
      <S.BookDetailsHeader>
        <Button aria-label="back to home" onClick={() => navigate('/')}>
          <S.BackIcon src={backIcon} />
          {genericDict.backToHome}{' '}
        </Button>
        <S.BookDetailsPageTitle>{dict.bookDetailsTitle}</S.BookDetailsPageTitle>
        <S.BookAnimation src={bookAnimation} />
      </S.BookDetailsHeader>
      <S.BookDetailsContent>{renderBookDetails()}</S.BookDetailsContent>
    </S.BookDetailsContainer>
  )
}
