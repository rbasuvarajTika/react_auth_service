import React, { useState } from "react";
import Login from '../components/Login';
import Register from '../components/Register';


export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
      <div className="loginContainer">
       
          {isLogin ? <Login/>  : <Register/>} 
  
        <p  className="link" onClick={()=>setIsLogin(!isLogin)}> {isLogin ? "Dont have an account? sign up here" : "Already have an account? login here"}</p>
      </div>
    );
}
