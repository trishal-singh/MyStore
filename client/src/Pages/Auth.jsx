import React, { useState } from 'react'
import './Auth.css'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Auth = () => {
    const [UserName,setUserName]= useState('')
    const [Password,setPassword]=useState('')
    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies(["access_token"])
    const handleUserName = (e)=>{
        setUserName(e.target.value)
       }
       const handlePassword = (e)=>{
        setPassword(e.target.value)
       }
    const handleLogin = async (e)=>{
       e.preventDefault()
       try{
        const result = await axios.post("http://localhost:3000/auth/login", {
          "username":UserName,
          "password":Password,
        })
       
        setCookies("access_token", result.data.token)
        navigate("/")
        console.log(result)
       }
       catch(e)
       {
         alert(e)
       }
    }
    const handleRegister = async (e)=>{
      e.preventDefault()
      try{
       const result = await axios.post("http://localhost:3000/auth/register", {
        "username":UserName,
        "password":Password,
       })
       alert("Registered")
       console.log(result)
      }
      catch(e)
      {
        alert(e)
      }
   }
  return (
    <>
    <div className="auth-logo">MyStore</div>
    <div className='body'>
    <form>
    <label>
       UserName : <input type="text" value={UserName} onChange={handleUserName}></input>
      </label>
      <label>
       Password : <input type="password" value={Password} onChange={handlePassword}></input>
      </label>
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleRegister}>REGISTER</button>
    </form>
    </div>
    </>
  )
}

export default Auth