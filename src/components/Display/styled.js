import styled from 'styled-components'

export const DisplayValue = styled.div`
  height: 60px;
  font-size: 3em;
  text-align: right;
  padding: 0 25px 0 25px;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.fontPrimary};
`
export const DisplayWrapper = styled.div`
  height: 100px;
`
export const DisplayExpress = styled.div`
  height: 40px;
  font-size: 1.5em;
  text-align: right;
  padding: 0 25px 0 25px;
  color: ${(props) => props.theme.fontPrimary};
  /* border-bottom: 2px solid;
  border-color: ${(props) => props.theme.primary}; */
`
