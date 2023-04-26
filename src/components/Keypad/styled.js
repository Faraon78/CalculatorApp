import styled from 'styled-components'

export const KeyItem = styled.button`
  width: 90px;
  height: 80px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.border};
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: ${(props) => props.theme.fontPrimary};
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`
export const KeyContainer = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 30px;
  padding-bottom: 30px;
  /* border-bottom: 2px solid;
  border-color: ${(props) => props.theme.primary}; */
`
