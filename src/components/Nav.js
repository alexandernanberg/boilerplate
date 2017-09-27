import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { colors } from '../constants'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

const NavLink = styled(Link)`
  margin: 0 12px;
  font-size: 1.8rem;
  text-decoration: none;
  color: ${colors.gray700};

  &:hover,
  &:focus {
    color: ${colors.gray900};
  }

  &.${props => props.activeClassName} {
    color: ${colors.gray900};
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
