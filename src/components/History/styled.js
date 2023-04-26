import styled from 'styled-components'

export const HistoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 15px;
`

export const List = styled.div`
  width: 100%;
  height: 460px;
  overflow-y: scroll;
  padding-right: 20px;
  /* box-sizing: content-box;   */
`
export const HistoryItem = styled.div`
  padding-top: 5px;
  font-size: 1.1em;
  color: ${(props) => props.theme.fontPrimary};
`
