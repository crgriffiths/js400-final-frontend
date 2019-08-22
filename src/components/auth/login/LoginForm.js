import React from 'react';

export default ({onSubmit}) => {
  return(
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}