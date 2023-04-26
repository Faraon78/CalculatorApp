import React from 'react'
import { connect } from 'react-redux'
import { HistoryWrapper, List, HistoryItem } from './styled'
import { PropTypes } from 'prop-types'

class HistoryCC extends React.Component {
  render() {
    const { isHistoryShow, historyList } = this.props

    const historyScreen =
      historyList.length === 0
        ? ''
        : historyList.map((item, index) => (
            <HistoryItem key={index} data-cy='history-item'>
              {item}
            </HistoryItem>
          ))
    return (
      <HistoryWrapper>
        <List data-cy='history-list'>{isHistoryShow && <div>{historyScreen}</div>}</List>
      </HistoryWrapper>
    )
  }
}

function mapStateToProps(state) {
  const { history } = state
  return {
    historyList: history.list,
  }
}

HistoryCC.propTypes = {
  isHistoryShow: PropTypes.bool,
  historyList: PropTypes.array,
}
export default connect(mapStateToProps)(HistoryCC)
