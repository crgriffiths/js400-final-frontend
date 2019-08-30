import React, { Component } from 'react';
import * as students from '../api/users'
import * as auth from '../api/auth'
import StudentsList from './List/List'
import GradeFilter from './List/Filters'

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isAdmin: false,
      loading: true
    }
    this.filterResults = this.filterResults.bind(this)
  }

  async componentDidMount() {
    const allUsers = await students.getUsers()
    const profile = await auth.profile()
    this.setState({users: allUsers.response, isAdmin: profile.user.isAdmin, loading: false })
  }

  async filterResults (range) {
    const users = this.state.users
    if (range.scoreAbove === "" && range.scoreBelow === "") {
      const allUsers = await students.getUsers()
      this.setState({users: allUsers.response})
      return
    }
    const filteredUsers = await users.filter(user => {
      if (user.gradeTotal && user.gradeTotal.pointsEarned >= range.scoreAbove && user.gradeTotal.pointsEarned <= range.scoreBelow){
        return user
      }
    })
    this.setState({users: filteredUsers})
  }

  render() {
    if (this.state.loading){
      return (
        <div className="container">
          <h4>Loading...</h4>
        </div>
      )
    }
    let filters
    if (this.state.isAdmin) {
      filters = <GradeFilter onSubmit={this.filterResults}/>
    }
    return (
      <div className="container">
        {filters}
        <StudentsList students={this.state.users}/>
      </div>
      
    )
  }
}
 
export default StudentContainer;