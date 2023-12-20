import { useState } from 'react'

export const useFavorite = ({ id }: { id: string }) => {
  const [storageBookItem, setStorageBookItem] = useState(() =>
    JSON.parse(localStorage.getItem('favourites') || '[]'),
  )

  const isFavourited = storageBookItem.includes(id)

  const handleToggleFavourite = () => {
    if (!isFavourited) {
      const newStorageItem = [...storageBookItem, id]
      setStorageBookItem(newStorageItem)
      localStorage.setItem('favourites', JSON.stringify(newStorageItem))
    } else {
      const newStorageItem = storageBookItem.filter(
        (savedId: string) => savedId !== id,
      )
      setStorageBookItem(newStorageItem)
      localStorage.setItem('favourites', JSON.stringify(newStorageItem))
    }
  }

  return { isFavourited, handleToggleFavourite }
}
