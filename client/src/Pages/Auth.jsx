import React, { useState } from 'react'
import './Auth.css'
const Auth = () => {
    const [UserName,setUserName]= useState('')
    const [Password,setPassword]=useState('')
    const handleUserName = (e)=>{
        setUserName(e.target.value)
       }
       const handlePassword = (e)=>{
        setPassword(e.target.value)
       }
  return (
    <>
    <div className="auth-logo">MyStore</div>
    <div className='body'>
    <form>
    <label>
       Username : <input type="text" value={UserName} onChange={handleUserName}></input>
      </label>
      <label>
       Password : <input type="text" value={Password} onChange={handlePassword}></input>
      </label>
      <button type="submit">LOGIN</button>
      <button type="submit">REGISTER</button>
    </form>
    </div>
    </>
  )
}

export default Auth