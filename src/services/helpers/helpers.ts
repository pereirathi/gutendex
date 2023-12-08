export const generateKey = () => {
  return `$rand_${new Date().getTime()}`
}

export const limitateString = (stg: string, limit: number) => {
  return stg.length > limit ? `${stg.substring(0, 100)}...` : stg
}
