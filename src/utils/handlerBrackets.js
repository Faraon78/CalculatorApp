export const openBracket = (item, value) => {
  return [...value, item]
}

export const closeBracket = (item, value) => {
  let countOpen = 0
  let countClose = 0
  for (let i = 0; i < value.length; i++) {
    if (value[i].action === 'openBrack') countOpen += 1
    if (value[i].action === 'closeBrack') countClose += 1
  }
  if (countClose < countOpen) {
    value.push(item)
    return [...value]
  }
  if (countClose === countOpen) return value
}
