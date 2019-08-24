import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  name="email"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  name="password"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control"
                  name="firstName"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  name="lastName"
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
 
export default SignupForm;