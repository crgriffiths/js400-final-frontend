import React from 'react';

class GradeFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreAbove: '',
      scoreBelow: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleChange ({ target: { name, value } }) {
    await this.setState({ [name]: value })
  }

  async handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() { 
    return (
      <form className="form-inline row" onSubmit={this.handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="scoreAbove" className="mr-2">Score is Above:</label>
          <input 
            name="scoreAbove" 
            type="number" 
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="scoreBelow" className="mr-2">Score is Below:</label>
          <input 
            name="scoreBelow" 
            type="number" 
            className="form-control" 
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Filter</button>
      </form>
    )
  }
}
 
export default GradeFilters;