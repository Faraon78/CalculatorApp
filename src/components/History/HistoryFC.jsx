import React from 'react'
import { useSelector } from 'react-redux'
import { HistoryWrapper, List, HistoryItem } from './styled'
import { PropTypes } from 'prop-types'

HistoryFC.propTypes = {
  isHistoryShow: PropTypes.bool,
  historyList: PropTypes.array,
}

function HistoryFC({ isHistoryShow }) {
  const historyList = useSelector((state) => state.history.list)

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

export { HistoryFC }
