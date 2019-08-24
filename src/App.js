import React from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Header from './components/shared/Header'
import AuthContainer from './components/auth/AuthContainer'
import AuthNav from './components/shared/AuthNav'
import UnauthNav from './components/shared/UnauthNav'
import AssignmentsList from './components/assignments/List/List'
import StudentsList from './components/students/List/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    if(this.state.isLoggedIn) {
      return (
        <div className="App">
            <Header/>
            <Router>
              <AuthNav/>
            
              <Route exact path='/' render={()=>(<AssignmentsList />)} />
              <Route exact path='/students' render={()=>(<StudentsList/>)}/>
            </Router>
          </div>
      )
    } else {
      return (
        <div className="App">
          <Header/>
          
          <Router>
            <UnauthNav/>
            <Route exact path='/' render={()=>(<Redirect to="/login" />)} />
            <Route exact path='/login' render={()=>(<AuthContainer isLoginPath={true} />)} />
            <Route exact path='/signup' render={()=>(<AuthContainer isLoginPath={false}/>)} />
          </Router>
        </div>
      )
    }
  }
}

export default App;
