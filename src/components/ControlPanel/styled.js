import styled from 'styled-components'

export const ControlItem = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 6px;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  color: ${(props) => props.theme.fontPrimary};
`
export const ControlContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding-top: 10px;
`
