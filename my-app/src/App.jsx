import React from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Homepage from './Todo/Homepage'
import Todolist from './Todo/Todolist'




function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='todolist' Component={Todolist}/>
     </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App



