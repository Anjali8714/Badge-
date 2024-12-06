import React, { useState } from 'react'

const Counter = () => {
    const [count ,setCount] = useState(0)
    const [showCount ,setShowCount] = useState(false)
    return (
    <div>
      <button onClick={()=>setShowCount(!showCount)}>{showCount ? "Hide count":"Show count"}</button>
      {
        showCount ? (
            <>
            <h2>Counter show open</h2>
            <h3>Counter is - {count} </h3>
            <button onClick={()=>setCount(count + 1)}>Increment</button>  
            <button onClick={()=>setCount(count - 1)}>Decrement</button>         
            </>
        ):null
      }
    </div>
  )
}

export default Counter
