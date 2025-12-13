import React, {useState } from 'react'
import App from "../App";
import api from "../loginApi/logindata"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


 const submit= (e) =>{
    e.preventDefault();
    api.post('/post', { name, email, password})
    .then(user => {
        // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(user.data));
    })
    .catch(error => console.log(error))
    navigate('/')
 }

  return (
    <App> 
    <div className='d-flex vh-98  mt-3 justify-content-center align-items-center'>
    <div className=' bg-whi text-black rounded p-3'>  
    <form onSubmit={submit}>
        <h2>Register User</h2>
        <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input 
            type="text"
            placeholder='Enter name'
            className='form-control text-capitalize'  
            onChange={(e) => setName(e.target.value)}  
            />
        </div>
        <div className='mb-2'>
            <label htmlFor="email">User Name/Email</label>
            <input 
            type="text"
            placeholder='Enter email'
            className='form-control' 
            onChange={(e) => setEmail(e.target.value)}    
            />
        </div>
        <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            placeholder='Enter password'
            className='form-control ' 
            onChange={(e) => setPassword(e.target.value)}    
            />
        </div>
        <button type='submit' className='btn btn-success w-100'>Submit</button>
    </form>   
    </div>
    </div>
    </App> 
  )
}



export default Register
