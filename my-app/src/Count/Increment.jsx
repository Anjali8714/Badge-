import React, { useContext } from 'react'
import { CounterContext } from './Context'

const Increment = () => {
    const { increment} = useContext(CounterContext)
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Increment
