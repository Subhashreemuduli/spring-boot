import React, { useEffect, useState } from 'react'
import userContext from './UserContext'
import { getCurrentUserDeatil, isLoggedIn } from '../auth/auth'

const UserProvider = ({children}) => {

     const [user,setUser]=useState({
        data:{},
        login:false
     })
     useEffect(()=>{
        setUser({
            data:getCurrentUserDeatil(),
            login:isLoggedIn()
        })
     },[])
  return (

    <userContext.Provider value={{user,setUser}}>
        {children}
        </userContext.Provider>
  )
}

export default UserProvider
