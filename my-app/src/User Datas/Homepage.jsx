import React from 'react'
import { useNavigate } from 'react-router-dom'
const Homepage = () => { 
    const navigate = useNavigate()
  return (
    <div>
        <h1 style={{textAlign :'center'}}>This Is My Homepage</h1>
        <button onClick={() => navigate('/formpage')}>Create user</button>       
        <p>UsersDetails <a href="UserDetails">click</a> Here</p>
    </div>
  )
}

export default Homepage
