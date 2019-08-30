import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom'
import AssignmentList from './List/List'
import List from './List/List';
import NewItem from  './Form/New.Form'
import * as actions from '../api/assignment'
import * as auth from '../api/auth'
import EditItem from './Form/Edit.Form';

class AssignmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAssignments: [],
      loading: true
    }
    this.createAssignment = this.createAssignment.bind(this)
    this.destroyAssignment = this.destroyAssignment.bind(this)
    this.editAssignment = this.editAssignment.bind(this)
    this.refreshAssignment = this.refreshAssignment.bind(this)
  }
  async componentDidMount() {
    const profile = await auth.profile()
    console.log(profile)
    this.setState({userAssignments: profile.user.assignments, loading: false})
  }

  async createAssignment (newItem) {
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

  async gradeAssignment (assignment) {
    console.log('I got pushed')
  }
  async refreshAssignment () {
    const profile = await auth.profile()
    this.setState({userAssignments: profile.user.assignments})
  }
  render() {
    const assignments = this.state.userAssignments
    if (this.state.loading){
      return (
        <div className="container">
          <h4>Loading...</h4>
        </div>
      )
    }
    return (
      <div className="container">
        <Route exact path='/' render={()=><AssignmentList assignments={this.state.userAssignments} destroyAssignment={this.destroyAssignment} isAdmin={this.props.isAdmin}/>}/>
        <Route exact path='/assignments/new' render={()=><NewItem onSubmit={this.createAssignment}/>}/>
        <Route exact path='/assignments/:id/edit' render={({match})=>{
          const assignment = assignments.find(assignment => assignment._id === match.params.id)
          return (<EditItem assignment={assignment} onSubmit={this.editAssignment}/>)
        }}/>
        <Route exact path='/assignments/ungraded' render={()=> (
          this.props.isAdmin ? <AssignmentList gradeAssignment={this.gradeAssignment} isAdmin={true} graded={false}/> : <Redirect to='/'/>
        )} />
        <Route exact path='/assignments/graded' render={()=> (
          this.props.isAdmin ? <AssignmentList gradeAssignment={this.gradeAssignment} isAdmin={true} graded={true}/> : <Redirect to='/'/>
        )} />
      </div>
    )
  }
}
 
export default withRouter(AssignmentContainer);