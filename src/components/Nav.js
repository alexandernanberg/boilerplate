import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}
