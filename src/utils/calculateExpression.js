import { AddOperation, SubOperation, DivOperation, MulOperation, RemainderOperation, store } from './commandCalculator'

export const calculate = (value) => {
  if (value.length === 1) return value
  if (value.length === 2) {
    const index = value.findIndex((item) => item.action === 'number')
    return value[index]
  }
  value = culculateFirst(value)
  value = culculateSecond(value)
  return value
}

const culculateFirst = (value) => {
  const indexSign = value.findIndex((item) => item.display === '*' || item.display === '/' || item.display === '%')
  if (indexSign === -1) {
    return value
  } else {
    const firstValue = Number(value[indexSign - 1].display)
    const secondValue = Number(value[indexSign + 1].display)

    if (value[indexSign].display === '*') {
      store.execute(new MulOperation(firstValue, secondValue))
    } else if (value[indexSign].display === '/') {
      store.execute(new DivOperation(firstValue, secondValue))
    } else if (value[indexSign].display === '%') {
      store.execute(new RemainderOperation(firstValue, secondValue))
    }
    const newItem = {
      display: store.value,
      action: 'number',
    }
    value.splice(indexSign - 1, 3, newItem)
    culculateFirst(value)
  }
  return value
}

const culculateSecond = (value) => {
  const indexSign = value.findIndex((item) => item.display === '+' || item.display === '-')
  if (indexSign === -1) {
    return value
  } else {
    const firstValue = Number(value[indexSign - 1].display)
    const secondValue = Number(value[indexSign + 1].display)

    if (value[indexSign].display === '+') {
      store.execute(new AddOperation(firstValue, secondValue))
    } else if (value[indexSign].display === '-') {
      store.execute(new SubOperation(firstValue, secondValue))
    }
    const newItem = {
      display: store.value,
      action: 'number',
    }
    value.splice(indexSign - 1, 3, newItem)
    culculateSecond(value)
  }
  return value
}
