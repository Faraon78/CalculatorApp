import React from 'react'
import { NavLink } from 'react-router-dom'
import { FlexContainer, FlexItem, NavItem, Title } from './styled.js'

function Header() {
  return (
    <FlexContainer>
      <FlexItem>
        <Title>Calculator App</Title>
      </FlexItem>
      <FlexItem>
        <NavLink to={'/'} data-cy='LinkCC'>
          <NavItem>Home(CC)</NavItem>
        </NavLink>
        <NavLink to={'/fc'} data-cy='LinkFC'>
          <NavItem>Home(FC)</NavItem>
        </NavLink>
        <NavLink to={'/settings'} data-cy='LinkSett'>
          <NavItem>Settings</NavItem>
        </NavLink>
      </FlexItem>
    </FlexContainer>
  )
}

export { Header }
