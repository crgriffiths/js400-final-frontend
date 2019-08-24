import React from 'react';

export default (props) => {
  return(
    <div className="alert alert-danger">
      <p className="mb-0">{props.message}</p>
    </div>
  )
}