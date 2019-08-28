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
        { this.props.isLoginPath ?  <LoginForm/> : <SignupForm onSubmit={()=>alert('I was submitted')}/> }
      </div>
    );
  }
}
 
export default AuthContainer;