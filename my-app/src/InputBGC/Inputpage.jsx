import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputBGCContext } from './Context'


const Inputpage = () => {
    const [title , setTitle] = useState('')
    const [content,setContent] = useState('')
    const [color,setColor] = useState('')
    const {list,setList} = useContext(InputBGCContext)
    const navigate = useNavigate()

    const handlesubmit = ()=> {
        setList([...list,{
            id:Date.now(),
            title,
            content,
            color
        }])
        setTitle('')
        setContent('')
        setColor('')
        navigate('/');
    }

  return (
    <div>
        <div>
            <label htmlFor="title">Title</label>
        <input type="text" value={title} placeholder='Enter title' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="content">Content</label>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Enter content'/>
        </div>
        <div>
            <label htmlFor="color">Color</label>
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
        </div>
        <button onClick={handlesubmit}>Ok</button>
    </div>
  )
}

export default Inputpage
