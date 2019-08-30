import React from 'react';
import Form from './Form'

const NewItem = (props) => {
  return (  
    <div>
      <Form
        _id={null}
        title='' 
        link=''
        description=''
        onSubmit={props.onSubmit}
      />
    </div>
  )
}
 
export default NewItem;
