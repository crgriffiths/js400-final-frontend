import React from 'react';

export default (props) => {
  let elColor
  if(props.student.gradeTotal) {
    let pct = props.student.gradeTotal.pointsEarned / props.student.gradeTotal.pointsPossible
    if (pct <= .599) {
      elColor = '#f23427'
    } else if (pct <= .699) {
      elColor = '#f27f27'
    } else if (pct <= .799) {
      elColor = '#d6cb00'
    } else if (pct <= .899) {
      elColor = '#02b319'
    } else {
      elColor = '#0252b3'
    }
  }
  const grade = props.student.gradeTotal ? `${props.student.gradeTotal.pointsEarned} / ${props.student.gradeTotal.pointsPossible}`: ''
  return(
    <div className="card mb-2" style={{width: '100%',background: '#dadada'}}>
      <div className="row p-2">
        <div className="col-md-8">
          <h2 style={{fontSize:'18px'}}>{props.student.firstName} {props.student.lastName} - <span>{props.student.email}</span></h2>
        </div>
        <div className="col-md-4">
          <h3 style={{color: elColor, textAlign: 'right',fontSize:'18px'}}>{grade}</h3>
        </div>
      </div>
    </div>
  )
}