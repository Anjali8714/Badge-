import React, { useContext ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { InputBGCContext } from './Context'

const Edit = () => {
    const navigate=useNavigate()
    const {list,handleedit} =useContext(InputBGCContext)
    const {id} = useParams()
    const value = list.find((item) => item.id === Number(id));
    const [edittitle , setEditTitle] = useState(value.title)
    const [editcontent,setEditContent] = useState(value.content)
    const [editcolor,setEditColor] = useState(value.color)

    const handleSave= ()=>{
        handleedit(id,edittitle,editcontent,editcolor)
        navigate('/')
    }

  return (
    <div>
      <input type="text" value={edittitle} onChange={(e)=> setEditTitle(e.target.value)}/>
      <textarea value={editcontent} onChange={(e)=>setEditContent(e.target.value)}/>
        <input type='color' value={editcolor} onChange={(e)=>setEditColor(e.target.value)}/>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default Edit
