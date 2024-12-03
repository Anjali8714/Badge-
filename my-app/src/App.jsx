import React from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Counter from './Count/Counter'
import Increment from './Count/Increment'
import Decrement from './Count/Decrement'




function App() {
  return (
    <>
    {/* <BrowserRouter>
     <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='todolist' Component={Todolist}/>
      <Route path='edit/:id' Component={Edit}/>
     </Routes>
    </BrowserRouter> */}
    
      <Counter/>
      <Increment/>
      <Decrement/>
    </>
  )
}

export default App



