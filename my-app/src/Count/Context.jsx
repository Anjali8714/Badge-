import React, { createContext, useState } from 'react'

export const CounterContext = createContext()
const Context = ({children}) => {
    const [count , setCount] = useState(0)
    const increment = () => {
        setCount(count +1)
    }
    const decrement = ()=> {
        setCount(count-1)
    }
  return (
    <div>
      <CounterContext.Provider value={{count,increment,decrement}}>
        {children}
      </CounterContext.Provider>
    </div>
  )
}

export default Context
