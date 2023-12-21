export const useFavorite = () => {
  const favoritesList = JSON.parse(
    localStorage.getItem('favorites-books') || '[]',
  )
  const getFavoritesBooks = () =>
    JSON.parse(localStorage.getItem('favorites-books') || '[]')

  const addBookToFavorites = ({ id }: { id: number }) => {
    const isAlreadyFavorite = favoritesList.includes(id)

    if (!isAlreadyFavorite) {
      const newBookItemId = [...favoritesList, id]
      localStorage.setItem('favorites-books', JSON.stringify(newBookItemId))
    } else {
      const newStorageItem = favoritesList.filter(
        (savedId: number) => savedId !== id,
      )
      localStorage.setItem('favorites-books', JSON.stringify(newStorageItem))
    }
  }

  return { getFavoritesBooks, favoritesList, addBookToFavorites }
}
