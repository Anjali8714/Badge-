import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/todolist')}>Create</button>
    </div>
  )
}

export default Homepage
