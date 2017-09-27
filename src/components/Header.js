import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Icon from './common/Icon'

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 920px;
  margin: 0 auto;
  padding: 32px;
  margin-bottom: 64px;
`

const Logo = styled.div`
  font-size: 2rem;
`

export default () => (
  <Header>
    <Logo>
      <Icon name="triangle" /> minimal-react-boilerplate
    </Logo>
    <Nav />
  </Header>
)
