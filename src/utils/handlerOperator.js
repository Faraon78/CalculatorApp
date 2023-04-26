import { zero } from '../constants/keyPad'

export const handlerOperator = (item, value) => {
  if (value.length === 0) return [zero, item]
  else if (
    value.length > 0 &&
    (value[value.length - 1].action === 'operator' || value[value.length - 1].action === 'sign')
  ) {
    value.pop()
    value.push(item)
    return [...value]
  } else if (value[value.length - 1].action === 'openBrack') {
    return value
  } else {
    return [...value, item]
  }
}
