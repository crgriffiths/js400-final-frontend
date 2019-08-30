import React from 'react';
import Form from './Form'

const EditItem = (props) => {
  return (  
    <div>
      <Form 
        _id={props.assignment._id}
        title={props.assignment.title} 
        link={props.assignment.link} 
        description={props.assignment.description} 
        onSubmit={props.onSubmit}
      />
    </div>
  )
}
 
export default EditItem;
