import React from 'react'
import Navbar from '../components/Navbar'
import { useCookies } from 'react-cookie'
import './Profile.css'
const Profile = () => {
    const [cookies, setCookies] = useCookies()
    if (!cookies.access_token) {
        return <Navigate to="/auth" />;
      }
    
    console.log(cookies.userID)
  return (
    <>
    <Navbar/>
    <div className='profile-container'>
        <div>NAME : USER1</div>
        <div>BALANCE : 1000</div>
        <div>USER: {cookies.userID}</div>
        <button className='logout-btn'>LOGOUT</button>
    </div>
    </>
  )
}

export default Profile