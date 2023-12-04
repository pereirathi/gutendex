import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_URL } from '../services/api/baseUrl'

const fetchData = async () => {
  const response = await axios(`${API_URL}books/`)
  return response?.data?.results
}

export function useBooksData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['books-data'],
  })

  return query
}
