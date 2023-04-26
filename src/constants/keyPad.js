export const keyPad = [
  { id: 'back', key: '←', action: 'clearKey' },
  { id: '7', key: '7', display: '7', action: 'digit' },
  { id: '8', key: '8', display: '8', action: 'digit' },
  { id: '9', key: '9', display: '9', action: 'digit' },
  { id: 'remainder', key: '%', display: '%', action: 'operator' },
  { id: 'multiply', key: '*', display: '*', action: 'operator' },
  { id: 'sign', key: '+/-', display: '-', action: 'sign' },
  { id: '4', key: '4', display: '4', action: 'digit' },
  { id: '5', key: '5', display: '5', action: 'digit' },
  { id: '6', key: '6', display: '6', action: 'digit' },
  { id: 'minus', key: '-', display: '-', action: 'operator' },
  { id: 'divide', key: '/', display: '/', action: 'operator' },
  { id: 'dot', key: '.', display: '.', action: 'dot' },
  { id: '1', key: '1', display: '1', action: 'digit' },
  { id: '2', key: '2', display: '2', action: 'digit' },
  { id: '3', key: '3', display: '3', action: 'digit' },
  { id: 'plus', key: '+', display: '+', action: 'operator' },
  { id: 'equal', key: '=', display: '=', action: 'equal' },
  { id: 'C', key: 'C', action: 'clearValue' },
  { id: 'openBrack', key: '(', display: '(', action: 'openBrack' },
  { id: '0', key: '0', display: '0', action: 'digit' },
  { id: 'closeBrack', key: ')', display: ')', action: 'closeBrack' },
  { id: 'CE', key: 'CE', action: 'clearExpr' },
  { id: 'CA', key: 'CA', action: 'clearAll' },
]

export const multiplay = {
  id: 'multiply',
  key: '*',
  display: '*',
  action: 'operator',
}
export const closeBrack = {
  id: 'closeBrack',
  key: ')',
  display: ')',
  action: 'closeBrack',
}
export const zero = {
  id: '0',
  key: '0',
  display: '0',
  action: 'digit',
}
