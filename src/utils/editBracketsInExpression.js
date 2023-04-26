import { calculate } from './calculateExpression'

export const editBrackets = (value) => {
  const indexOpen = value.findLastIndex((item) => item.display === '(')
  if (indexOpen === -1) {
    return value
  } else {
    let indexClose
    for (let i = indexOpen; i < value.length; i++) {
      if (value[i].display === ')') {
        indexClose = i
        break
      }
    }
    const piece = value.slice(indexOpen + 1, indexClose)
    if (piece.length === 0) {
      value.splice(indexOpen, 2)
      editBrackets(value)
    } else if (piece.length === 1 && piece[0].action === 'number') {
      value.splice(indexClose, 1)
      value.splice(indexOpen, 1)
      editBrackets(value)
    } else {
      const middleRes = calculate(piece)
      const pieceLength = indexClose - indexOpen
      value.splice(indexOpen, pieceLength + 1, middleRes[0])
      editBrackets(value)
    }
  }
  return value
}
