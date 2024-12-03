import React, { useState } from 'react'
import { createContext } from 'react'

export const TodoContext = createContext();

const Context = ({children}) => {
  const [todos ,setTodos] = useState([])

const handleedit =(id,edit)=>{
const editvalue= todos.map((item) => item.id == id?{id,input:edit}:item);
setTodos(editvalue);
}
  const handledelete = (id) =>{
    const deletedvalue = todos.filter((item)=>item.id !== id)
    setTodos(deletedvalue);
  }


  return (
    <div>
      <TodoContext.Provider value={{todos , setTodos , handledelete,handleedit }}>
        {children}
      </TodoContext.Provider>
    </div>
  )
}

export default Context

