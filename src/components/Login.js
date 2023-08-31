import axios from 'axios'
import React, {useState } from 'react' 
import "./Login.css"
import {useNavigate, Link} from 'react-router-dom'
//import { HomePage } from '../Pages/HomePage';
const Login = () => {
const navigate= useNavigate();
const[email , setEmail ]= useState(" ")

const [password ,setPassword] = useState([])

const handleUserName=(e)=>{
console.log(e.target.value)
setEmail(e.target.value)

}
const handlePassWord=(e)=>{
  setPassword(e.target.value)
  
  }

  const hanndleSubmit =(e)=>{
   e.preventDefault()
   console.log ("Submitted")
   axios.post(`http://localhost:8080/api/v1/auth/signin `,{

    email : email,
    password : password

})
.then((response)=>{
  console.log(response.data)  
  console.log('token', response.data.token);
   localStorage.setItem('token', response.data.token)
  alert("Successfully LoggedIn") 
  // navigate('/homepage')
  window.location.href="/homepage"
})
.catch((err)=>{
  console.log(err)
  console.log(err.response)
  alert("Incorrect Email or Password") 



})

}




// const handleLogin = () => {
//   //API

//   // usersList

//   const userData = usersList.filter((user) => {
//     return user.email === loginForm.email && user.password === loginForm.password
//   });


//   if (userData[0]) {
//     localStorage.setItem("user", JSON.stringify(userData));
//    navigate('/home')
//   } else {
//     alert("Username or password is incorrect");
//   }
// };

return (

    
  <div class="mb-3">
    <h1>Login</h1>
<label htmlFor="exampleFormControlInput1" className="form-label"></label>
<input type="email"
 name='email' 
 value={email}
onChange={handleUserName} 
className="form-control"
 id="floatingInput" placeholder="Email"/>
<label htmlFor="exampleFormControlInput1" className="form-label"></label>
<input type="password" 
name='password'
 value={password}   
 onChange={handlePassWord} 
 className="form-control"
  id="floatingPassword" 
  placeholder="Password"/>
<button className='btn btn-primary' onClick={hanndleSubmit}>Login</button>
<Link className=" link" to="/forgotpassword"><p>Forgot Password</p></Link>

</div>

)

}
export default Login;

  
