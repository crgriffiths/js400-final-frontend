import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import AssignmentList from './List/List'
import List from './List/List';
import NewItem from  './Form/New.Form'
import * as assignment from '../api/assignment'
import * as auth from '../api/auth'
import * as formhelper from '../helpers/forms'

class AssignmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAssignments: [],
    }
    this.createAssigment = this.createAssigment.bind(this)
  }
  async componentDidMount() {
    const profile = await auth.profile()
    console.log(profile)
    this.setState({userAssignments: profile.user.assignments})
  }

  async createAssigment (newItem) {
    const response = await assignment.create(newItem)
  }
  destroyAssignment (assignment) {
    
  }
  render() { 
    return (
      <div className="container">
        <Route exact path='/' render={()=><AssignmentList assignments={this.state.userAssignments}/>}/>
        <Route exact path='/assignments/new' render={()=><NewItem onSubmit={this.createAssigment}/>}/>
        <Route exact path='/assignments/:id/edit' render={({match})=>{

        }}/>
      </div>
    )
  }
}
 
export default withRouter(AssignmentContainer);