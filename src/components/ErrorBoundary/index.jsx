import React from 'react'
import { StyledContainer, StyledError } from './styled.js'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <StyledContainer>
          <h2>Something went wrong.</h2>
          <StyledError>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </StyledError>
        </StyledContainer>
      )
    }

    return this.props.children
  }
}
export { ErrorBoundary }
