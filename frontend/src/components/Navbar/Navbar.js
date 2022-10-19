import React from 'react'
import './Navbar.scss'
const Navbar = () => {

const navArr = ['contact', 'work', 'skills', 'about']
const navItems = navArr.map((item)=>{
  return (
    <li key={`link-${item}`}>
      <div />
      <a href={`#${item}`}>{item}</a>
    </li>
  )
})

  return (
    <nav className="app__navbar">
      <div>
        <img />
      </div>
      <ul>
        {navItems}
      </ul>
    </nav>
  )
}

export default Navbar