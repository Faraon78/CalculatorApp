import React from 'react'
import { DisplayValue, DisplayWrapper, DisplayExpress } from './styled'
import { PropTypes } from 'prop-types'

DisplayFC.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string,
}

function DisplayFC({ value, result }) {
  return (
    <DisplayWrapper>
      <DisplayExpress data-cy='result'>{result}</DisplayExpress>
      <DisplayValue data-cy='value'>{value}</DisplayValue>
    </DisplayWrapper>
  )
}

export { DisplayFC }
