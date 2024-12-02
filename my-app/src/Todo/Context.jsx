import React, { createContext, useState } from 'react'

export const TodoContext = createContext();
const Context = ({children}) => {
    const [todos,setTodos] = useState([])
  return (
      <TodoContext.Provider value={{todos,setTodos,addTodo}}>
        {children}
      </TodoContext.Provider>
  )
}

export default Context
