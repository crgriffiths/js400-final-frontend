import React from 'react';

/**
 * Auth Nav for student view
 */

export default (props) => {
  return(
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">All Students</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Create New Assignment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </nav>
  )
}