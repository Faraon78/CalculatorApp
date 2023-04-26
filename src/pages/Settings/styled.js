import styled from 'styled-components'

export const H2 = styled.h2`
  padding: 15px 0 20px 0;
  font-weight: bold;
  color: ${(props) => props.theme.fontPrimary};
`

export const H3 = styled.h3`
  color: ${(props) => props.theme.fontPrimary};
`
export const Select = styled.select`
  min-width: 250px;
  font-size: 20px;
  margin-top: 20px;
  padding: 20px;
`
export const Option = styled.option`
  min-width: 250px;
  height: 30px;
  font-size: 20px;
  margin-top: 10px;
  border: 2px solid;
`
