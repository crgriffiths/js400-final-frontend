import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from './List.Item';

export default (props) => {
  let assignmentList = props.assignments.map((assignment) => {
    return <ListItem assignment={assignment} destroyAssignment={props.destroyAssignment}/>
  })
  return(
    <>
      <h1>Assignments</h1>
      {assignmentList}
    </>
  )
}