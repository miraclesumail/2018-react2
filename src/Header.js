import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>App</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/players'>Player</Link></li>
        <li><Link to='/todos'>todos</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header