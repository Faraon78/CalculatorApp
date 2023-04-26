import React from 'react'
import { connect } from 'react-redux'
import { clearHistory } from '../../store/reducers/historySlice'
import { PropTypes } from 'prop-types'
import { ControlItem, ControlContainer } from './styled'

class ControlPanelCC extends React.Component {
  handlerClearHistory = () => {
    this.props.dispatch(clearHistory())
  }
  render() {
    const { handlerHistoryShow, isHistoryShow } = this.props
    const title = isHistoryShow ? 'Hide' : 'Show'

    return (
      <ControlContainer>
        <ControlItem onClick={(e) => handlerHistoryShow(!isHistoryShow)} data-cy='displayHistory'>
          {title}
        </ControlItem>
        <ControlItem onClick={this.handlerClearHistory} data-cy='clearHistory'>
          Clear history
        </ControlItem>
      </ControlContainer>
    )
  }
}

ControlPanelCC.propTypes = {
  handlerHistoryShow: PropTypes.func,
  isHistoryShow: PropTypes.bool,
}
export default connect()(ControlPanelCC)
