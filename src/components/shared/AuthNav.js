import React from 'react';
import {NavLink} from 'react-router-dom'
/**
 * Auth Nav for student view
 */

export default (props) => {
  return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/students">All Students</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/assignments/new">Create New Assignment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}