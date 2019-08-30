import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from './List.Item';

/**
 * TODO:
 * [ ] Update Link path assignment ID to be dynamic
 * [ ] Create and import destroyPost function that deletes post by ID
 * [ ] Use this component in a .map() function to render all assignments in the assignments object
 */

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