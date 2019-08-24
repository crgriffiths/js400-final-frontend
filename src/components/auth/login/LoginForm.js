import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      errorMessage: null
    }
  }
  render() { 
    return(
      <div className="col-md-6">
        <form onSubmit={this.props.onSubmit}>
          <div className="row">
            <div className="col">
              <div class="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  name="email"
                />
              </div>
            </div>
            <div className="col">
              <div class="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  name="password"
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