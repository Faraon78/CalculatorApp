import { multiplay, closeBrack } from '../constants/keyPad'

const zero = {
  display: 0,
  action: 'number',
}

export const handlerExpression = (value) => {
  let editValue = []
  let newNumber = ''
  for (let i = 0; i < value.length; i++) {
    switch (value[i].action) {
      case 'dot':
      case 'sign':
      case 'digit':
        newNumber = newNumber + value[i].display
        if (i > 0 && value[i - 1].action === 'closeBrack') {
          editValue.push(multiplay)
        }
        break
      case 'openBrack':
        if (newNumber.length > 0) {
          editValue.push(createNewNumber(newNumber))
          newNumber = ''
        }
        if (
          i > 0 &&
          (value[i - 1].action === 'digit' || value[i - 1].action === 'dot' || value[i - 1].action === 'closeBrack')
        ) {
          editValue.push(multiplay)
        }
        editValue.push(value[i])
        break
      case 'closeBrack':
        if (newNumber.length > 0) {
          editValue.push(createNewNumber(newNumber))
          newNumber = ''
        }
        if (i > 0 && value[i - 1].action === 'openBrack') {
          editValue.push(zero)
        }
        editValue.push(value[i])
        break
      default:
        if (newNumber.length > 0) {
          editValue.push(createNewNumber(newNumber))
          newNumber = ''
        }
        editValue.push(value[i])
    }
  }
  if (newNumber.length > 0) {
    editValue.push(createNewNumber(newNumber))
    newNumber = ''
  }

  if (editValue[editValue.length - 1].action === 'openBrack') {
    editValue.push(zero, closeBrack)
  }
  let countOpen = 0
  let countClose = 0
  for (let i = 0; i < editValue.length; i++) {
    if (editValue[i].action === 'openBrack') countOpen += 1
    if (editValue[i].action === 'closeBrack') countClose += 1
  }
  if (countOpen > countClose) {
    const diff = countOpen - countClose
    for (let i = 1; i <= diff; i++) {
      editValue.push(closeBrack)
    }
  }
  if (editValue[editValue.length - 1].action === 'operator') {
    editValue.pop()
  }

  return editValue
}

const createNewNumber = (number) => {
  if (number === '.' || number === '-' || number === '-.') number = 0
  if (number.length > 1 && number[0] === '.') {
    number = '0' + number
  }
  if (number.length > 1 && number[number.length - 1] === '.') {
    number = number.slice(0, -1)
  }
  number = Number((+number).toFixed(3))
  const newItem = {
    display: number,
    action: 'number',
  }
  return newItem
}
