import React, { useContext } from 'react'
import { formcontext } from './Context'
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const navigate = useNavigate()
    const {datas} = useContext(formcontext);
  return (
    <div>
      <h4>User Details</h4>
      <ul>

      {
        datas.map((item) => (
            <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <p>{item.email}</p>
                <p>{item.address}</p>
                <p>{item.qualification}</p>
                
            </li>
        ))
      }
      </ul>
      <button onClick={() => navigate('/formpage')}>Add</button>
    </div>
  )
}

export default UserDetails
