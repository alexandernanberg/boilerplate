import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

const NavLink = styled(Link)`
  margin: 0 12px;
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--gray700);

  &:hover,
  &:focus {
    color: var(--gray900);
  }

  &.${props => props.activeClassName} {
    color: var(--gray900);
    text-decoration: line-through;
  }
`

export default () => (
  <Nav>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="active">
      About
    </NavLink>
  </Nav>
)
