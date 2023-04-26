import React from 'react'
import { useDispatch } from 'react-redux'
import { clearHistory } from '../../store/reducers/historySlice'
import { PropTypes } from 'prop-types'
import { ControlItem, ControlContainer } from './styled'

ControlPanelFC.propTypes = {
  handlerHistoryShow: PropTypes.func,
  isHistoryShow: PropTypes.bool,
}

function ControlPanelFC({ handlerHistoryShow, isHistoryShow }) {
  const dispatch = useDispatch()
  const handlerClearHistory = () => {
    dispatch(clearHistory())
  }
  const title = isHistoryShow ? 'Hide' : 'Show'

  return (
    <ControlContainer>
      <ControlItem onClick={(e) => handlerHistoryShow(!isHistoryShow)} data-cy='displayHistory'>
        {title}
      </ControlItem>
      <ControlItem onClick={handlerClearHistory} data-cy='clearHistory'>
        Clear history
      </ControlItem>
    </ControlContainer>
  )
}

export { ControlPanelFC }
