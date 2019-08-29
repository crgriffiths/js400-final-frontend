import React, { Component } from 'react';
import LoginForm from '../auth/login/LoginForm'
import SignupForm from '../auth/signup/SignupForm'

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <div>
        { this.props.isLoginPath ?  <LoginForm onSubmit={this.props.onSubmit}/> : <SignupForm onSubmit={this.props.onSubmit}/> }
      </div>
    );
  }
}
 
export default AuthContainer;