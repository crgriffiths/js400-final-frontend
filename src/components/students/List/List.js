import React from 'react';
import ListItem from './List.Item'
import GradeFilter from './Filters'

export default (props) => {
  let studentList = props.students.map((student) => {
    return <ListItem student={student} key={student.id}/>
  })

  return(
    <div className="container">
      {studentList}
    </div>
  )
}