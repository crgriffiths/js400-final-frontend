import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import * as students from '../api/users'
import StudentsList from './List/List'

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    }
  }
  async componentDidMount() {
    const allUsers = await students.getUsers()
    console.log(allUsers)
    this.setState({users: allUsers.response, loading: false })
  }

  /*async createAssignment (newItem) {
    console.log(actions)
    const response = await actions.create(newItem)
    await this.refreshAssignment()
    
  }
  async destroyAssignment (assignment) {
    if(window.confirm(`Delete '${assignment.title}'?`)){
      const response = await actions.destroy(assignment)
      await this.refreshAssignment()
      alert(`WARNING: deleting assignment '${assignment.title}' is a permanent action`)
      return
    }
  }

  async editAssignment (assignment) {
    const response = await actions.edit(assignment)
    await this.refreshAssignment()
  }

  async refreshAssignment () {
    const profile = await auth.profile()
    this.setState({userAssignments: profile.user.assignments})
  } */
  render() {
    //const assignments = this.state.userAssignments
    if (this.state.loading){
      return (
        <div className="container">
          <h4>Loading...</h4>
        </div>
      )
    }
    return (
      <StudentsList students={this.state.users}/>
    )
  }
}
 
export default withRouter(StudentContainer);