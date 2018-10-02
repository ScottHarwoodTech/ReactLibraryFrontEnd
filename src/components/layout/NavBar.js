import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () =>{
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Library System</Link>
        <ul className="right">
          <li><NavLink to="/books"> List Books </NavLink> </li>
          <li><NavLink to="/ja"> List Journal Articles </NavLink> </li>
          <li><NavLink to="/sites"> List Sites </NavLink> </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
