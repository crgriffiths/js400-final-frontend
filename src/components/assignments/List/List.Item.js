import React from 'react';
import {Link} from 'react-router-dom'

/**
 * TODO:
 * [ ] Update Link path assignment ID to be dynamic
 * [ ] Create and import destroyPost function that deletes post by ID
 * [ ] Use this component in a .map() function to render all assignments in the assignments object
 */

export default ({assignment}) => {
  return(
    <div className="card p-3" style={{width: '100%',background: '#dadada'}}>
      <div className="row">
        <div className="col-md-6">
          <h2>{assignment.title}</h2>
          <p>{assignment.description}</p>
          <p><a href={assignment.link} target="_blank">Project Link</a></p>
          <div className="cardActions">
            <Link to={`/assignment/${assignment._id}/edit`} className="py-1 px-4 btn-primary mr-2">Edit</Link>
            <span onClick={()=>alert('destroyPost() should be called here')} className="py-1 px-4 btn-danger">Delete</span>
          </div>
        </div>
        <div className="col-md-6">
          <h3 style={{textAlign: 'right'}}>50 / 50</h3>
        </div>
      </div>
    </div>
  )
}