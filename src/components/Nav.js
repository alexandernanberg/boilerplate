import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`

const NavLink = styled(Link)`
  margin: 0 var(--size-2);
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--gray700);

  &:hover,
  &:focus {
    color: var(--gray900);
  }

  &[aria-current] {
    color: var(--gray900);
    text-decoration: line-through;
  }
`

export default function Nav() {
  return (
    <StyledNav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </StyledNav>
  )
}
