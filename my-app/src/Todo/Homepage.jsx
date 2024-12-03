import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoContext } from './Context'

const Homepage = () => {
  const {todos,handledelete} = useContext(TodoContext)

    const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/todolist')}>Create</button>

      <ul>
        {
          todos.map((item)=>(
            <li key={item.id}>
              <div>
              <p>{item.input}</p>
              <button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</button>
              <button onClick={()=>handledelete(item.id)}>Del</button>
              </div>
              
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Homepage
