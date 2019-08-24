import React from 'react';

export default ({assignments, editPost, deletePost}) => {
  return(
    <div className="card" style={{width: '100%',background: '#dadada'}}>
      <div className="row">
        <div className="col-md-6">
          <h2>HTML &amp; CSS Final Project</h2>
          <p>My Final Project for the HTML &amp; CSS Course.</p>
          <p><a href="#">Project Link</a></p>
          <div className="cardActions">
            <button className="btn-primary mr-2">Edit</button>
            <button className="btn-danger">Delete</button>
          </div>
        </div>
        <div className="col-md-6">
          <h3>50 / 50</h3>
        </div>
      </div>
    </div>
  )
}