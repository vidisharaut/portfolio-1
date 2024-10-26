import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to='home' smooth={true} duration={500}>Home</Link>
        <Link to='about' smooth={true} duration={500}>About</Link>
        <Link to='projects' smooth={true} duration={500}>Projects</Link>
    </nav>
  )
}

export default NavBar