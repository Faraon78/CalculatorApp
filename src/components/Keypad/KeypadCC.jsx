import React from 'react'
import { keyPad } from '../../constants/keyPad'
import { KeyItem, KeyContainer } from './styled'
import { PropTypes } from 'prop-types'

class KeypadCC extends React.Component {
  render() {
    const { cbHandlerClick } = this.props
    const keyScreen = keyPad.map((item) => (
      <KeyItem
        key={item.id}
        onClick={(e) => cbHandlerClick(item)}
        value={item.id}
        action={item.action}
        data-cy={item.id}
      >
        {item.key}
      </KeyItem>
    ))
    return <KeyContainer>{keyScreen}</KeyContainer>
  }
}
KeypadCC.propTypes = {
  cbHandlerClick: PropTypes.func,
  keyPad: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      display: PropTypes.string,
      action: PropTypes.string.isRequired,
    }),
  ),
}
export { KeypadCC }
