import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../styles/components/nav.scss'

const Nav = () =>
  <nav className={style.component}>
    <NavLink exact to="/" className={style.link} activeClassName={style.linkActive}>Home</NavLink>
    <NavLink to="/about" className={style.link} activeClassName={style.linkActive}>About</NavLink>
  </nav>

export default Nav
