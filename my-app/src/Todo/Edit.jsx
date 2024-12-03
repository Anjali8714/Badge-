import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TodoContext } from './Context'

const Edit = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {todos,handleedit} = useContext(TodoContext)
    const value = todos.find((item) =>String(item.id) === id)
    const [edit ,setEdit] = useState(value.input)
    const save = () => {
        handleedit(id,edit)
        navigate('/')
    }
    return (
    <div>
      <input type="text" value={edit} onChange={(e)=>setEdit(e.target.value)}/>
      <button onClick={save}>Save</button>
    </div>
  )
}

export default Edit

