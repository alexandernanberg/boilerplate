import React from 'react'
import Nav from '../Nav'
import Icon from '../Icon'
import style from './style.scss'

const Header = () => (
  <header className={style.root}>
    <h2>
      <Icon name="triangle" /> minimal-react-boilerplate
    </h2>
    <Nav />
  </header>
)

export default Header
