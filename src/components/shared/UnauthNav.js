import React from 'react';
import {NavLink} from 'react-router-dom'

export default (props) => {
  return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
        </ul>
    </nav>
  )
}