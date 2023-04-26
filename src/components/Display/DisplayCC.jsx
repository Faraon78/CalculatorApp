import React from 'react'
import { DisplayValue, DisplayWrapper, DisplayExpress } from './styled'
import { PropTypes } from 'prop-types'

class DisplayCC extends React.Component {
  render() {
    const { value, result } = this.props
    return (
      <DisplayWrapper>
        <DisplayExpress data-cy='result'>{result}</DisplayExpress>
        <DisplayValue data-cy='value'>{value}</DisplayValue>
      </DisplayWrapper>
    )
  }
}

DisplayCC.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string,
}

export { DisplayCC }
