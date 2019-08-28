import React from 'react';
import * as auth from '../../api/auth'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      errorMessage: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  async handleSubmit (e) {
    e.preventDefault()
    const response = await auth.login(this.state)
    if (response.status !== 200 || response.status !== 201) {
      this.setState({
        error: true,
        errorMsg: response.message
      })
    }
  }

  render() { 
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
 
export default LoginForm;