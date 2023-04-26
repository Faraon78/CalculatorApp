import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 70vh;
  display: flex;
  justify-content: space-between;
`

export const SectionLeft = styled.div`
  width: 73%;
  border-right: 2px solid;
  padding-top: 15px;
  border-color: ${(props) => props.theme.primary};
`

export const SectionRight = styled.div`
  width: 25%;
`
export const Title = styled.h3`
  text-align: center;
  margin: 15px 0 0 0;
  color: ${(props) => props.theme.fontPrimary};
`
