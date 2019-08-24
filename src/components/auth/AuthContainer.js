import React, { Component } from 'react';
import LoginForm from '../auth/login/LoginForm'
import SignupForm from '../auth/signup/SignupForm'

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const isLoggedIn=true
    return ( 
      <div>
        { isLoggedIn ? <SignupForm onSubmit={()=>alert('I was submitted')}/> : <LoginForm onSubmit={()=>alert('I was submitted')}/> }
      </div>
    );
  }
}
 
export default AuthContainer;