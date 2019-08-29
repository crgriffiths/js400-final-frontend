import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
/**
 * Auth Nav for student view
 */
class AuthNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = (e) => {
    e.preventDefault()
    this.props.logoutUser()
      .then(() => this.props.history.push('/login'))
  }

  render() { 
    return (
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
            <span className="nav-link" onClick={this.clickHandler}>Logout</span>
          </li>
        </ul>
      </nav>
    )
  }
}
 
export default withRouter(AuthNav);
