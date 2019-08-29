import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import * as token from './components/helpers/tokens'
import * as auth from './components/api/auth'

// Components
import Header from './components/shared/Header'
import AuthContainer from './components/auth/AuthContainer'
import NavContainer from './components/shared/NavContainer';
import AssignmentContainer from './components/assignments/Container';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserId: null,
      loading: true
    }
    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
  }
  async componentDidMount () {
    if (token.getToken()) {
      const { user } = await auth.profile();
      this.setState({ currentUserId: user._id, loading: false });
    } else {
      this.setState({ loading: false })
    }
  }

  async loginUser (user) {
    const response = await auth.login(user)
    if (response.status === 200) {
      await token.setToken(response.token)
      const profile = await auth.profile()
      this.setState({currentUserId: profile.user._id})
      return
    }
    return response
  }

  async logoutUser () {
    token.clearToken()
    this.setState({ currentUserId: null })
  }

  async signupUser (user) {
    const response = await auth.signup(user)
    await token.setToken(response.token)
    
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id })
  }


  render() {
    const { currentUserId, loading } = this.state
    if(loading) {
      return (
          <>
            <Header/>
            <Router>
              <NavContainer
                currentUserId={currentUserId}
                logoutUser={this.logoutUser}
              />
            </Router>
            <div className='container'>
              <span>Loading...</span>
            </div>
          </>
      )
    }


    return (
      <div className="App">
        <Header/>
        <Router>
          <NavContainer
            currentUserId={currentUserId}
            logoutUser={this.logoutUser}
          />
          <Route path='/' render={()=>(currentUserId?<AssignmentContainer currentUserId={currentUserId}/>:<Redirect to='/login'/>)} />
          <Route exact path='/login' render={()=>(currentUserId?<Redirect to='/'/>:<AuthContainer onSubmit={this.loginUser} isLoginPath={true}/>)} />
          <Route exact path='/signup' render={()=>(currentUserId?<Redirect to='/'/>:<AuthContainer onSubmit={this.signupUser} isLoginPath={false}/>)} />
        </Router>
      </div>
    )
  }
}

export default App;
