import React from 'react';
import ListItem from './List.Item'

export default (props) => {
  let studentList = props.students.map((student) => {
    return <ListItem student={student}/>
  })
  return(
    <div className="container">
      {studentList}
    </div>
  )
}