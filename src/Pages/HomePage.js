import React from 'react'
import  {Link} from 'react-router-dom'
const HomePage = () => {
    const logoutHandle=()=>{
        localStorage.clear()
        window.location.href="/"
    }
    
  return (
    <div>
        <h1>Welcome</h1>
      <button onClick={logoutHandle} >Logout</button>
    </div>
  )
}


export default HomePage