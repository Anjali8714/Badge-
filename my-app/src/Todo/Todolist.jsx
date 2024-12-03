import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoContext } from './Context'


const Todolist = () => {
    const {todos,setTodos} =useContext(TodoContext)
    const [input,setInput] = useState('')
    const navigate = useNavigate()

    const handleadd =()=>{
 
        // const datas={
        //     id:Date.now(),
        //     input
        // }

        setTodos([...todos,{
          id:Date.now(),
            input
        }])
        setInput('');

        navigate('/')
    }
    

  return (
    <div>
      <input type="text" value={input} placeholder='Enter something...' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleadd}>Add</button>
    </div>
  )
}

export default Todolist
