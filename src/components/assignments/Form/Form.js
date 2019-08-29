import React from 'react';
import {withRouter} from 'react-router-dom'
import ErrorMsg from '../../shared/ErrorMsg'
import * as formhelper from '../../helpers/forms'

class AssignmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      link: '',
      description: '',
      validated: false,
      error: false,
      errorMessage: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validated = this.validated.bind(this)
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
        str = formhelper.modifyString(str)
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
  //const isEnabled = this.validated(this.state)
  let error
  if (this.state.error) {
    error = <ErrorMsg message={this.state.errorMessage}/>
  }
    return (
      <div className="col-md-12">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="title">Assignment Title</label>
                <input
                  className="form-control"
                  name="title"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="link">Project Link</label>
                <input
                  className="form-control"
                  name="link"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  onChange={this.handleChange}
                >
                </textarea>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {error}
      </div>
    )
  }
}
 
export default withRouter(AssignmentForm)