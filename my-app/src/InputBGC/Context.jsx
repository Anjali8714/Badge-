import React, { createContext, useState } from 'react'

export const InputBGCContext =createContext();

const Context = ({children}) => {
    const [list ,setList] = useState([])
    const handledelete= (id)=>{
        const deletevalue = list.filter((item) => item.id !== id);
        setList(deletevalue)
    } 
    const handleedit = (id,edittitle,editcontent,editcolor) =>{
        // console.log(`id=${id} title:${edittitle} content:${editcontent}`)
        const edit = list.map((item) => item.id === Number(id) ?{id,title:edittitle,content:editcontent,color:editcolor}:item);
        setList(edit)
        // console.log(list)
        
    }
  return (
    <div>
      <InputBGCContext.Provider value={{list,setList,handledelete,handleedit}}>
      {children}
      </InputBGCContext.Provider>
    </div>
  )
}

export default Context

