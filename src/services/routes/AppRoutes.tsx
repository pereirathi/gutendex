import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../../pages/Home'
import { BookDetails } from '../../pages/BookDetails'
import { NotFound } from '../../components/NotFound/NotFound'
import { CardsSkeleton } from '../../components/CardsSkeleton'

export function AppRoutes() {
  return (
    <Suspense fallback={<CardsSkeleton numberOfCards={25} speed={2} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-details/:bookId" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
