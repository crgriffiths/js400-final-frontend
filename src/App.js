import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/shared/Header'
import AuthContainer from './components/auth/AuthContainer'
import AuthNav from './components/shared/AuthNav'
import UnauthNav from './components/shared/UnauthNav'
import AssignmentsList from './components/assignments/List/List'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const isLoggedIn = true
    if(isLoggedIn) {
      return (
        <div className="App">
            <Header/>
            <AuthNav/>
            <AssignmentsList/>
          </div>
      )
    }else {
      return (
        <div className="App">
          <Header/>
          <UnauthNav/>
          <AuthContainer/>
        </div>
      )
    }
  }
}

export default App;
