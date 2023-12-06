import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_URL } from '../services/api/baseUrl'

const fetchBooks = async (query = '', pageParam = 1) => {
  const response = await axios.get(
    `${API_URL}/books/?page=${pageParam}&search=${query}`,
  )
  return response.data
}

export function useBooksData({ searchTermTyped }: { searchTermTyped: string }) {
  const query = useSuspenseInfiniteQuery({
    queryFn: () => fetchBooks(searchTermTyped),
    queryKey: ['books-data', { searchTermTyped }],
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        return pages.length + 1
      }
    },
    initialPageParam: null,
  })
  return query
}
