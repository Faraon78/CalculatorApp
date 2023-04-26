import React from 'react'
import { connect } from 'react-redux'
import { DisplayCC } from '../Display/DisplayCC'
import { KeypadCC } from '../Keypad/KeypadCC'
import HistoryCC from '../History/HistoryCC'
import ControlPanelCC from '../ControlPanel/ControlPanelCC'
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

class CalculatorCC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHistoryShow: true,
      result: '0',
      value: [],
    }
  }

  handlerHistoryShow = (bool) => {
    this.setState({
      isHistoryShow: bool,
    })
  }

  displayRes = (res) => {
    let disp
    if (res.res === 'Error') {
      disp = res.display + ' = Error'
      this.setState({
        value: [],
      })
    } else if (res.res === '0') {
      disp = res.display + ' = 0'
      this.setState({
        value: [],
      })
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
      this.setState({
        value: newValue,
      })
    }
    this.setState({
      result: disp,
    })
    this.props.dispatch(addHistory(disp))
  }

  handlerClick = (item) => {
    if (item.action === 'digit' && this.state.value.length < 32) {
      this.setState({
        value: addDigit(item, this.state.value),
      })
    } else if (item.action === 'dot' && this.state.value.length < 32) {
      this.setState({
        value: addDot(item, this.state.value),
      })
    } else if (item.action === 'clearKey') {
      this.setState({
        value: clearKey(this.state.value),
      })
    } else if (item.action === 'sign' && this.state.value.length < 32) {
      this.setState({
        value: changeSign(item, this.state.value),
      })
    } else if (item.action === 'openBrack' && this.state.value.length < 32) {
      this.setState({
        value: openBracket(item, this.state.value),
      })
    } else if (item.action === 'closeBrack' && this.state.value.length < 32) {
      this.setState({
        value: closeBracket(item, this.state.value),
      })
    } else if (item.action === 'clearValue') {
      this.setState({
        value: [],
      })
    } else if (item.action === 'clearExpr') {
      this.setState({
        value: [],
        result: '0',
      })
      store.value = 0
    } else if (item.action === 'clearAll') {
      this.setState({
        value: [],
        result: '0',
      })
      store.value = 0
      this.props.dispatch(clearHistory())
    } else if (item.action === 'operator') {
      this.setState({
        value: handlerOperator(item, this.state.value),
      })
    } else if (item.action === 'equal') {
      const res = handlerEqual(this.state.value)
      this.displayRes(res)
    }
  }
  render() {
    const displayValue = this.state.value.length > 0 ? this.state.value.map((item) => item.display).join('') : '0'
    return (
      <CalculatorWrapper>
        <SectionLeft>
          <DisplayCC value={displayValue} result={this.state.result} />
          <KeypadCC cbHandlerClick={this.handlerClick} />
        </SectionLeft>
        <SectionRight>
          <Title>History</Title>
          <ControlPanelCC handlerHistoryShow={this.handlerHistoryShow} isHistoryShow={this.state.isHistoryShow} />
          <HistoryCC isHistoryShow={this.state.isHistoryShow} />
        </SectionRight>
      </CalculatorWrapper>
    )
  }
}
CalculatorCC.propTypes = {
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

export default connect()(CalculatorCC)
