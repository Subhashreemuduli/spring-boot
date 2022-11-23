import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const UserDashboard = () => {

  const object=useContext(userContext)
  return (
    <>
    <div className='dashboard1'>
    <div className='dashboard'>
      <h2>Welcome  {object.user.data.name}</h2>

      
    </div>

    <p> Get Best Services with minimum price ...</p>
    <span>Want to know more ?</span>
    <a href="/services" className='about-btnnn'>Click Here</a>
    </div>
    </>

  )
}

export default UserDashboard
