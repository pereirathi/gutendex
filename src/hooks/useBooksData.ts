import axios from 'axios'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { API_URL } from '../services/api/baseUrl'

const firstPage = 1

export function useBooksData({ searchTermTyped }: { searchTermTyped: string }) {
  const query = useSuspenseInfiniteQuery({
    queryKey: ['books', { searchTermTyped }],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get(
        `${API_URL}/books/?page=${
          pageParam || firstPage
        }&search=${searchTermTyped}`,
      )
      return response.data
    },

    initialPageParam: firstPage,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        return pages.length + 1
      }
    },
  })
  return query
}
