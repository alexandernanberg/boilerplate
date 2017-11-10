import React from 'react'
import styled from 'styled-components'
import Icon from './common/Icon'
import Nav from './Nav'

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 64px;
  padding: 32px;
  max-width: 920px;
`

const Logo = styled.div`
  font-size: 2rem;
`

export default () => (
  <Header>
    <Logo>
      <Icon name="triangle" /> react-boilerplate
    </Logo>
    <Nav />
  </Header>
)
