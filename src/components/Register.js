import axios from 'axios'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
 const Register = () => {

  const[registerForm , setRegisterForm]= useState({
    name:"",
    email:"",
    password:""

  })
 
  const handleRegister=()=>{
    axios.post(`http://localhost:3000/users`,{...registerForm , id: uuidv4() })
    .then((res)=>{
      alert("Successfully registered")

    })
    .catch((err)=>{
      console.log(err)
      alert("Something went wrong, please try again")
    })
  }




  return (
   <div class="mb-3">
    <h1>Register</h1>
<input
   type="text"
   className="form-control"
   id="floatingInputName"
   name='name'
   value={registerForm.name}
   onChange={(e)=> setRegisterForm( {...registerForm, [e.target.name]:  e.target.value} )}

  placeholder="Your Name"
        />
        <br/>
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="email"
   name='email' 
   value={registerForm.email}
  onChange={(e)=>setRegisterForm({ ...registerForm, [e.target.name]:e.target.value})} 
  className="form-control"
   id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <br/>

  <input type="password" 
  name='password'
   value={registerForm.password}   
   onChange={(e)=>setRegisterForm({ ...registerForm,[e.target.name]:e.target.value})} 
   className="form-control"
    id="floatingPassword" 
    placeholder="password"/>
  <button className='btn btn-primary' onClick={handleRegister}>Register</button>
</div>
  )
}
export default Register;