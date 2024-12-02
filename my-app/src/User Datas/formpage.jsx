import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { formcontext } from './Context';

const Formpage = () => {
    const {datas ,setDatas} = useContext(formcontext);

    const [name ,SetName] = useState('');
    const [age ,SetAge] = useState('');
    const [email ,SetEmail] = useState('');
    const [address ,SetAddress] = useState('');
    const [qualification ,SetQualification] = useState('');

    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault();

        const newEntry = {
            id:Date.now(),
            name,
            age,
            email,
            address,
            qualification
        }

        setDatas([...datas , newEntry]);
        SetName('');
        SetAge('');
        SetEmail('');
        SetAddress('');
        SetQualification('');

        navigate('/userdetails')
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>

        <div style={{padding:'2px'}}>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} placeholder='Enter your name' onChange={(e) => SetName(e.target.value)}/>
        </div>
        <div style={{padding:'2px'}}>
      <label htmlFor="age">Age</label>
      <input type="number" value={age} placeholder='Enter your age' onChange={(e) => SetAge(e.target.value)}/>
        </div>
        <div style={{padding:'2px'}}>
      <label htmlFor="email">E-mail</label>
      <input type="text" value={email} placeholder='Enter your email' onChange={(e) => SetEmail(e.target.value)}/>
        </div>
        <div style={{padding:'2px'}}>
      <label htmlFor="address">Address</label>
      <input type="text" value={address} placeholder='Enter your address' onChange={(e) => SetAddress(e.target.value)}/>
        </div>
        <div style={{padding:'2px'}}>
      <label htmlFor="qualification">Qualification</label>
      <input type="text" value={qualification} placeholder='Enter your qualification' onChange={(e) => SetQualification(e.target.value)}/>
        </div>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Formpage
