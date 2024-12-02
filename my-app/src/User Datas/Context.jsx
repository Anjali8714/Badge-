import React, {createContext, useState } from 'react'

export const formcontext = createContext();
const Context = ({children}) => {
    const [datas , setDatas] = useState([]);

  return (
    <div>
      <formcontext.Provider value={{datas , setDatas}}>
        {children}
      </formcontext.Provider>
    </div>
  )
}

export default Context
