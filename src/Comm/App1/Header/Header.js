import React from 'react'
import './Header.css'

const Header = () =>{
  return (
    <ul className='headerMenu'>
      <li> <a href='https://www.google.ru/'> Google</a></li>
      <li> <a href='https://scrimba.com/g/glearnreact'>Scrimba </a></li>
      <li> <a href='https://www.w3schools.com/charsets/ref_utf_dingbats.asp'> Icones</a></li>
      <li> <a href='https://www.youtube.com/'> Youtube</a></li>
    </ul>
  )
}

export default Header