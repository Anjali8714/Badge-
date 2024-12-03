import React, { useContext } from 'react'
import { CounterContext } from './Context'

export default function Decrement() {
    const{ decrement}= useContext(CounterContext)
  return (
    <div>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
