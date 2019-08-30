import React from 'react'

// components
import UnauthNav from './UnauthNav'
import AuthNav from './AuthNav'

export default ({ currentUserId, logoutUser, isAdmin }) => (
  <div>
    <div className='app-navigation'>
      {
        currentUserId
          ? <AuthNav currentUserId={currentUserId} logoutUser={logoutUser} isAdmin={isAdmin}/>
          : <UnauthNav />
      }
    </div>
  </div>
)
