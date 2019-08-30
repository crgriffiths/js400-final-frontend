import React from 'react';
import {withRouter} from 'react-router-dom'
import ErrorMsg from '../../shared/ErrorMsg'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      validated: false,
      error: false,
      errorMessage: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validated = this.validated.bind(this)
    this.modifyString = this.modifyString.bind(this)
  }

  modifyString (string) {
    return string.split(/(?=[A-Z])/).map(function(p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
    }).join(' ');
  }

  validated (fields) {
    let keys = Object.keys(fields)
    let values = Object.values(fields)
    if (values.indexOf('') === -1) {
      this.setState({error:false, validated: true})
      return true
    }
    let errorFields = []
    values.forEach((element,index) => {
      if (element === '') {
        let str = keys[index]
        str = this.modifyString(str)
        errorFields.push(str)
      }
    })
    const message = (errorFields) => {
      if (errorFields.length < 2) {
        return `${errorFields[0]} is a required field`
      }
      return `${errorFields.join(', ')} are required fields`
    }
    let errorMessage = message(errorFields)
    this.setState({error:true, errorMessage: errorMessage})
    return false
  }

  
  async handleChange ({ target: { name, value } }) {
    await this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.validated(this.state)
    if(this.validated(this.state)) {
      this.props.onSubmit(this.state)
      .then(response => {
        if (response && response.status !== 200) {
          this.setState({error: true, errorMessage: response.message})
        } else {
          this.props.history.push('/')
        }
      })
    }
  }
  render() {
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
                  type="email"
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
                  minLength={8}
                  type="password"
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
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        { error }
      </div>
    )
  }
}
 
export default withRouter(SignupForm);