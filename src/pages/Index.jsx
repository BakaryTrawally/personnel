import React, { useState } from 'react'
import App from '../App'
import "../index.css"
import "../App.css"
import api from "../loginApi/logindata"
import House from "../images/house.jpg"
import Input from "../pages/Input"
import { useNavigate } from 'react-router-dom'


const Index = () => { 
const navigate = useNavigate();
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

  const date = new Date();
  const theDate = (`${date.getDate()}Th ${date.getMonth()+1}  ${date.getFullYear()}`)

 const handleSubmit= (e) =>{
     e.preventDefault();
     api.post('/login', {name, email, password})
     .then(user => {
       console.log(user)
       if(user.data.status === "Success"){
        // localStorage.setItem("user", "true");
        localStorage.setItem("user", JSON.stringify(user.data));
        navigate('/addPersonnel')
       }
     })
  }
  return (
    <div className='login-page mt-5 text-center'>
      <nav>
        <div className='header'>
          <h1>ARFFS</h1>
          </div>
          <div className='h-[10vh] font-[1] font-weight-[600] flex justify-center flex-col items-center space-x-3
          '>
          <h2>Employee Mangement System(EMS)</h2> 
          <h5>{theDate}</h5>
          </div>     
      </nav>
      <form onSubmit={handleSubmit}>
        <div className='
        home-container 
       flex flex-col flex-center
       text-center
       justify-center
       items-center
       text-center
        '>
           <img  src={House} alt="Ba" 
           /> 
        <div className='input-container mb-8'>  
        <h2>Login</h2>
        <Input
            name='email'
            id="postTitle"
            type="text"
            placeholder='Email Address...'
            onChange={(e) => setEmail(e.target.value)}
            />
        <Input
            name='password'
            id="password"
            type="password"                      
            placeholder='Password...'
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className='grid m-2 gap-5 w-100 btn btn-secondary '>
            Submit
            </button>
            <a className='text-primary px-2' href="/register">No Account, register</a>
        </div>
        </div>
        </form>  
   </div>
  )
}
export default Index        