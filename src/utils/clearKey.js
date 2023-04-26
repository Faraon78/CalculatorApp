export const clearKey = (value) => {
  if (value.length === 2 && value[0].key === '-') {
    return []
  } else {
    value.pop()
    return [...value]
  }
}
