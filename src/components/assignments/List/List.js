import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from './List.Item';
import ListItemAdmin from './List.Item.Admin'
import * as assignments from '../../api/assignment'


class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradedAssignments:[],
      ungradedAssignments: [],
      loading: true
    }
    this.getGradedAssignments = this.getGradedAssignments.bind(this)
    this.getUngradedAssignments = this.getUngradedAssignments.bind(this)
  }

  componentDidMount() {
    this.getGradedAssignments()
    this.getUngradedAssignments()
    this.setState({loading:false})
  }

  async getGradedAssignments () {
    const gradedAssignments = await assignments.graded()
    this.setState({gradedAssignments:gradedAssignments})
  }
  
  async getUngradedAssignments () {
    const ungradedAssignments = await assignments.ungraded()
    this.setState({ungradedAssignments:ungradedAssignments})
  }

  render() { 
    if (this.state.loading) {
      return (
        <span>Loading...</span>
      )
    }
    let assignmentList
    if(!this.props.isAdmin) {
      assignmentList = this.props.assignments.map((assignment) => {
        return <ListItem assignment={assignment} destroyAssignment={this.props.destroyAssignment}/>
      })
    }
    if(this.props.isAdmin) {
      if(this.props.graded) {
        assignmentList = this.state.gradedAssignments.map((user) => {
          let items = user.assignments.map((assignment) => {
            return <ListItemAdmin assignment={assignment} />
          });
          return items
        })
      }
    }
    if(this.props.isAdmin) {
      if(this.props.ungraded) {
        assignmentList = this.state.ungradedAssignments.map((user) => {
          let items = user.assignments.map((assignment) => {
            return <ListItemAdmin assignment={assignment} />
          });
          return items
        })
      }
    }
    return (   
      <>
        <h1>Assignments</h1>
        {assignmentList}
      </>
    )
  }
}
 
export default AssignmentList;
