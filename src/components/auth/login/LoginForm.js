import React from 'react';
import { withRouter } from 'react-router'
import ErrorMsg from '../../shared/ErrorMsg'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validated: false,
      error: false,
      errorMessage: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validated = this.validated.bind(this)
  }
  validated (fields) {
    let values = Object.values(fields)
    if (values.indexOf('') === -1) {
      return true
    }
    return false
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
    this.validated(this.state)
  }

  handleSubmit (e) {
    this.setState({error: false, errorMessage: null})
    e.preventDefault()
    this.props.onSubmit({email: this.state.email, password:this.state.password})
      .then(response => {
        if (response && response.status !== 200) {
          this.setState({error: true, errorMessage: response.message})
        } else {
          this.props.history.push('/')
        }
      })
  }

  render() {
    const isEnabled = this.validated(this.state)
    let error
    if (this.state.error) {
      error = <ErrorMsg message={this.state.errorMessage}/>
    }
    return(
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <button disabled={!isEnabled} type="submit">Submit</button>
        </form>
        {error}
      </div>
    )
  }
}
 
export default withRouter(LoginForm);