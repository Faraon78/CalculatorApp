export const addDot = (item, value) => {
  if (value.length === 0) return [item]
  else {
    switch (value[value.length - 1].action) {
      case 'dot':
      case 'closeBrack':
        return value
      case 'digit':
        const index = value.findLastIndex((item) => item.action !== 'digit')
        if (index !== -1 && value[index].action === 'dot') {
          return value
        } else {
          return [...value, item]
        }
      default:
        return [...value, item]
    }
  }
}
