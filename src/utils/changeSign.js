export const changeSign = (item, value) => {
  if (value.length === 0) return [item]
  else {
    switch (value[value.length - 1].action) {
      case 'sign':
        value.pop()
        return [...value]
      case 'operator':
      case 'openBrack':
      case 'closeBrack':
        return [...value, item]
      case 'digit':
      case 'dot':
        const index = value.findLastIndex((item) => item.action !== 'digit' && item.action !== 'dot')
        if (index === -1) {
          value.unshift(item)
          return [...value]
        } else if (value[index].action === 'sign') {
          value.splice(index, 1)
          return [...value]
        } else {
          value.splice(index + 1, 0, item)
          return [...value]
        }
      default:
        return value
    }
  }
}
