import { useCallback, useEffect, useRef, useState } from 'react'

export function useDebouncedValue<T>(initialValue: T, waitTime: number) {
  const [value, setValue] = useState(initialValue)
  const timeoutRef = useRef<number | null>(null)

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!)
  useEffect(() => clearTimeout, [])

  const debouncedSetValue = useCallback((newValue: T) => {
    clearTimeout()

    timeoutRef.current = window.setTimeout(() => {
      setValue(newValue)
    }, waitTime)
  }, [])

  return [value, debouncedSetValue] as const
}
