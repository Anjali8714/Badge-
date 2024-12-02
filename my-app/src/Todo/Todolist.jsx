import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoContext } from './Context'

const Todolist = () => {
    const {todos,setTodos}=useContext(TodoContext)

    const navigate = useNavigate()

    const [input,setInput] = useState('')

    const handlesubmit =()=>{
       // e.preventDefault();

        const datas={
            id:Date.now(),
            input
        }

        setTodos([...todos,datas])
        setInput('');

        navigate('/')
    }
  return (
    <div>
      <input type="text" value={input} placeholder='Enter something...' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default Todolist
