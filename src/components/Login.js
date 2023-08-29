import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import "./Login.css"
import { useNavigate ,Link} from 'react-router-dom'
//import { HomePage } from '../Pages/HomePage';
const Login = () => {
const navigate = useNavigate();

const[loginForm , setLoginForm ]= useState(" ")

const [usersList ,setUsersList] = useState([])

useEffect(()=>{
axios.get(`   `,{

userName : " ",
password :" "

})
.then((res)=>{
  setUsersList(res.data);   

})
.catch((err)=>{
  console.log(err);
})

},[])

const handleLogin = () => {
  //API

  // usersList

  const userData = usersList.filter((user) => {
    return user.userName === loginForm.userName && user.password === loginForm.password
  });


  if (userData[0]) {
    localStorage.setItem("user", JSON.stringify(userData));
   navigate('/home')
  } else {
    alert("Username or password is incorrect");
  }
};

  return (

    
    <div class="mb-3">
      <h1>Login</h1>
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="userName"
   name='userName' 
   value={loginForm.userName}
  onChange={(e)=>setLoginForm({ ...loginForm, [e.target.name]:e.target.value})} 
  className="form-control"
   id="floatingInput" placeholder="User Name"/>
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="password" 
  name='password'
   value={loginForm.password}   
   onChange={(e)=>setLoginForm({ ...loginForm,[e.target.name]:e.target.value})} 
   className="form-control"
    id="floatingPassword" 
    placeholder="password"/>
  <button className='btn btn-primary' onClick={handleLogin}>Login</button>
  <Link className=" link" to="/forgotpassword"><p>Forgot Password</p></Link>

</div>

  )
  
}
export default Login;