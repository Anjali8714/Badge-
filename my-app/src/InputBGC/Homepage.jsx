import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { InputBGCContext } from './Context'

const Homepage = () => {
    const {list,handledelete} = useContext(InputBGCContext)
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/input')}>Create</button>
      <ul>
      {
        list.map((item) => {
        //   const backgroundColor = item.color === 'black' ? 'black' : 'white';
        // const textColor = item.color === 'black' ? 'white' : 'black';
          
          return(
            <li key={item.id} style={{background:item.color}}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>               
                <button onClick={()=>handledelete(item.id)}>Delete</button>
                <button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</button>                
            </li>
          )
        
      })}
      </ul>
      
    </div>
  )
}

export default Homepage
