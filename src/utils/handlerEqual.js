import { handlerExpression } from './handlerExpression'
import { editBrackets } from './editBracketsInExpression'
import { calculate } from './calculateExpression'

export const handlerEqual = (value) => {
  if (value.length === 0) {
    return { res: '0', display: '0' }
  }
  let editValueExpression = handlerExpression(value)
  const display = editValueExpression.map((item) => item.display).join('')
  try {
    const indexBrack = editValueExpression.findIndex((item) => item.display === '(')
    if (indexBrack !== -1) {
      editValueExpression = editBrackets(editValueExpression)
    }
    const editValue = calculate(editValueExpression)
    let res
    if (editValue[0].display === 0) {
      res = '0'
    } else {
      res = isFinite(editValue[0].display) ? Number(+editValue[0].display.toFixed(3)).toString() : 'Error'
    }
    const answer = {
      display: display,
      res: res,
    }
    return answer
  } catch {
    return {
      display: display,
      res: 'Error',
    }
  }
}
