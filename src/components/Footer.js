import React from 'react'
import { CgEnter } from 'react-icons/cg'
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer'>
        <div className='footer-container'>
        <div className='navlinks'>
        <Link to='home' smooth={true} duration={500}>Home</Link>
        <Link to='about' smooth={true} duration={500}>About</Link>
        <Link to='projects' smooth={true} duration={500}>Projects</Link>
        </div>
        <div className='profile-links'>
            <a href = ''>LinkedIn</a>
            <a href = ''>GitHub</a>
            <a href = ''>Leetcode</a>
            <a href = ''>Codechef</a>
        </div>
        <div className='contact-links'>
            <span>+91 8381046592</span>
            <a href="vidisharaut27@gmail.com">vidisharaut27@gmail.com</a>
        </div>
        </div>
        {/* <small>Copyright 2024 Vidisha Raut. All Rights Reserved</small> */}
    </div>
  )
}

export default Footer