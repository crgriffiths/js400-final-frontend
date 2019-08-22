import React, { Component } from 'react';
import LoginForm from '../auth/login/LoginForm'

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <LoginForm/>
      </div>
    );
  }
}
 
export default AuthContainer;