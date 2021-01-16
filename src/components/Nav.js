import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`

const NavLink = styled(RouterLink)`
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
      <NavLink end to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </StyledNav>
  )
}
