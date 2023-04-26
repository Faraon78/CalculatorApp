import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DisplayFC } from '../Display/DisplayFC'
import { KeypadFC } from '../Keypad/KeypadFC'
import { HistoryFC } from '../History/HistoryFC'
import { ControlPanelFC } from '../ControlPanel/ControlPanelFC'
import { addHistory, clearHistory } from '../../store/reducers/historySlice'
import { CalculatorWrapper, SectionLeft, SectionRight, Title } from './styled'
import { clearKey } from '../../utils/clearKey'
import { addDigit } from '../../utils/addDigit'
import { changeSign } from '../../utils/changeSign'
import { openBracket, closeBracket } from '../../utils/handlerBrackets'
import { handlerOperator } from '../../utils/handlerOperator'
import { handlerEqual } from '../../utils/handlerEqual'
import { addDot } from '../../utils/addDot'
import { store } from '../../utils/commandCalculator'
import { PropTypes } from 'prop-types'

CalculatorFC.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      key: PropTypes.string,
      action: PropTypes.string.isRequired,
      display: PropTypes.string,
    }),
  ),
  isHistoryShow: PropTypes.bool,
  result: PropTypes.string,
}
function CalculatorFC() {
  const [isHistoryShow, setIsHistoryShow] = useState(true)
  const [result, setResult] = useState('0')
  const [value, setValue] = useState([])
  const dispatch = useDispatch()

  const handlerHistoryShow = (bool) => {
    setIsHistoryShow(bool)
  }

  const displayRes = (res) => {
    let disp
    if (res.res === 'Error') {
      disp = res.display + ' = Error'
      setValue([])
    } else if (res.res === '0') {
      disp = res.display + ' = 0'
      setValue([])
    } else {
      disp = (res.display + ' = ' + res.res).toString()
      const arr = res.res.toString().split('')
      let newValue = []
      for (let i = 0; i < arr.length; i++) {
        let type
        if (arr[i] === '-') type = 'sign'
        else if (arr[i] === '.') type = 'dot'
        else type = 'digit'
        newValue.push({
          id: type,
          display: arr[i],
          action: type,
        })
      }
      setValue(newValue)
    }
    setResult(disp)
    dispatch(addHistory(disp))
  }

  const handlerClick = (item) => {
    if (item.action === 'digit' && value.length < 32) {
      setValue(addDigit(item, value))
    } else if (item.action === 'dot' && value.length < 32) {
      setValue(addDot(item, value))
    } else if (item.action === 'clearKey') {
      setValue(clearKey(value))
    } else if (item.action === 'sign' && value.length < 32) {
      setValue(changeSign(item, value))
    } else if (item.action === 'openBrack' && value.length < 32) {
      setValue(openBracket(item, value))
    } else if (item.action === 'closeBrack' && value.length < 32) {
      setValue(closeBracket(item, value))
    } else if (item.action === 'clearValue') {
      setValue([])
    } else if (item.action === 'clearExpr') {
      setValue([])
      setResult('0')
      store.value = 0
    } else if (item.action === 'clearAll') {
      setValue([])
      setResult('0')
      store.value = 0
      dispatch(clearHistory())
    } else if (item.action === 'operator') {
      setValue(handlerOperator(item, value))
    } else if (item.action === 'equal') {
      const res = handlerEqual(value)
      displayRes(res)
    }
  }

  const displayValue = value.length > 0 ? value.map((item) => item.display).join('') : '0'

  return (
    <CalculatorWrapper>
      <SectionLeft>
        <DisplayFC data-cy='displayFC' value={displayValue} result={result} />
        <KeypadFC cbHandlerClick={handlerClick} />
      </SectionLeft>
      <SectionRight>
        <Title>History</Title>
        <ControlPanelFC handlerHistoryShow={handlerHistoryShow} isHistoryShow={isHistoryShow} />
        <HistoryFC isHistoryShow={isHistoryShow} />
      </SectionRight>
    </CalculatorWrapper>
  )
}

export { CalculatorFC }
