import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${(props) => props.theme.secondary};
`
export const FlexItem = styled.div`
  margin: 0 15px 0 15px;
  color: ${(props) => props.theme.fontPrimary};
`

export const NavItem = styled.span`
  padding: 0 10px 0 10px;
  color: ${(props) => props.theme.fontPrimary};
`
export const Title = styled.h1`
  color: ${(props) => props.theme.fontPrimary};
  font-style: italic;
  font-size: 1.5em;
`
