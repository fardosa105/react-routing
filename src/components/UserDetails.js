import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function UserDetails() {
    const [user, setUser] =useState({})
    const params = useParams()
    console.log(params);
    

  return (()=>{
    fetch ('https://localhost3000/users/${params.(id)}')
    .then((res)=>res.json())
    .then(user=>setUser(user))
    .catch(error=>console.log(error()
    ()
    ))
    })
    return (
      <div>
         <h1>UserDetails</h1>
         <h2>Name: {user.name}</h2>
         <h3>username: {user.name}</h3>
         <h5>phone:{user.phone}</h5>
         <h3>company:{user.company.name}</h3>
      </div>

        
    )

}

export default UserDetails