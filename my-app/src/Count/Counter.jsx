import React, { useContext } from 'react'
import { CounterContext } from './Context'

const Counter = () => {
    const {count} = useContext(CounterContext)
  return (
    <div>
        <p style={{fontSize:'50px'}}>{count}</p>
      
    </div>
  )
}

export default Counter
