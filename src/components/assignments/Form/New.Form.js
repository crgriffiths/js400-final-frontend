import React from 'react';
import Form from './Form'

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <Form onSubmit={this.props.onSubmit}/>
      </div>
    )
  }
}
 
export default NewItem;
