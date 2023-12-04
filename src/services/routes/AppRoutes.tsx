import { Routes, Route } from 'react-router-dom'
import { BookDetails } from '../../pages/BookDetails'
import { Home } from '../../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-details" element={<BookDetails />} />
    </Routes>
  )
}
