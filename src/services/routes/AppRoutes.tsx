import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../../pages/Home/Home'
import { BookDetails } from '../../pages/BookDetails/BookDetails'
import { NotFound } from '../../components/NotFound/NotFound'
import { Skeleton } from '../../components/Skeleton/Skeleton'

export function AppRoutes() {
  return (
    <Suspense fallback={<Skeleton numberOfCards={25} speed={2} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-details/:bookId" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
