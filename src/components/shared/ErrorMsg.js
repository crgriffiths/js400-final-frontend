import React from 'react';

export default (props) => {
  return(
    <div className="alert alert-danger my-4">
      <p className="mb-0">{props.message}</p>
    </div>
  )
}