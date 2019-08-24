import React from 'react';

export default ({students}) => {
  return(
    <div className="card" style={{width: '100%',background: '#dadada'}}>
      <div className="row">
        <div className="col-md-6">
          <h2>Breanna McGrath <span>breanna.mcgrath@email.com</span></h2>
        </div>
        <div className="col-md-6">
          <h3>94 / 100</h3>
        </div>
      </div>
    </div>
  )
}