import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/shared/Header'
import AuthContainer from './components/auth/AuthContainer'
import UnauthNav from './components/shared/UnauthNav'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <UnauthNav/>
        <AuthContainer/>
      </div>
    )
  }
}

export default App;
