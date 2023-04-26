export const addDigit = (item, value) => {
  if (value.length === 0) return [item]
  else if (value.length === 1 && value[0].key === '0') {
    return [item]
  } else {
    return [...value, item]
  }
}
