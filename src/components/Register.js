import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName ,setLastName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleFirstname=(e)=>{
    console.log(e.target.value)
    setFirstName(e.target.value)
    
    }
    const handleLastname=(e)=>{
      console.log(e.target.value)
      setLastName(e.target.value)
      
      }
      const handleEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
        
        }
        const handlePassword=(e)=>{
          setPassword(e.target.value)
          
          } 
          const hanndleSubmit =(e)=>{
            e.preventDefault()
            console.log ("Submitted")
            axios.post(`http://localhost:8080/api/v1/auth/signup `,{
            firstName : firstName,
            lastName :lastName,
             email : email,
             password : password
         
         })
         .then((response)=>{
           console.log(response.data)  
           //console.log('token', response.data.token);
          // localStorage.setItem('token', response.data.token)
           alert("Successfully LoggedIn") 
         
         })
         .catch((err)=>{
           console.log(err)
           console.log(err.response)
         
         
         })
         
         }
         
         
         
  
         return (
          <div class="mb-3">
           <h1>Register</h1>
       <input
          type="text"
          className="form-control"
          id="floatingInputName"
          name='firstName'
          value={firstName}
          onChange={handleFirstname}
       
         placeholder="First Name"
               />
               <input
          type="text"
          className="form-control"
          id="floatingInputName"
          name='lastName'
          value={lastName}
          onChange={handleLastname}
       
         placeholder="Last Name"
               />
               <br/>
         <label htmlFor="exampleFormControlInput1" className="form-label"></label>
         <input type="email"
          name='email' 
          value={email}
         onChange={handleEmail} 
         className="form-control"
          id="floatingInput" placeholder="name@example.com"/>
         <label htmlFor="exampleFormControlInput1" className="form-label"></label>
       
       
         <input type="password" 
         name='password'
          value={password}   
          onChange={handlePassword} 
          className="form-control"
           id="floatingPassword" 
           placeholder="password"/>
         <button className='btn btn-primary' onClick={hanndleSubmit}>Register</button>
       </div>
         )
       }
       export default Register;