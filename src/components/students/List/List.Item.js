import React from 'react';

export default (props) => {
  const grade = props.student.gradeTotal ? `${props.student.gradeTotal.pointsEarned} / ${props.student.gradeTotal.pointsPossible}`: ''
  return(
    <div className="card mb-2" style={{width: '100%',background: '#dadada'}}>
      <div className="row p-2">
        <div className="col-md-8">
          <h2 style={{fontSize:'18px'}}>{props.student.firstName} {props.student.lastName} - <span>{props.student.email}</span></h2>
        </div>
        <div className="col-md-4">
          <h3 style={{textAlign: 'right',fontSize:'18px'}}>{grade}</h3>
        </div>
      </div>
    </div>
  )
}