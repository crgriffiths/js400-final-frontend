import React, { Component } from 'react';
import AssignmentList from './List/List'
import List from './List/List';

class AssignmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <AssignmentList/>
    )
  }
}
 
export default AssignmentContainer;