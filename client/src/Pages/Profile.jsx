import React, { useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useCookies } from 'react-cookie'
import './Profile.css'
import axiosClient from '../services/axiosClient'
import { Navigate,useNavigate } from 'react-router'
const Profile = () => {
    const [cookies, setCookies,removeCookies] = useCookies()
    const [username,setusername]=useState('')
    const [availableMoney,setavailableMoney]=useState(0)
    const navigate=useNavigate()
    if (!cookies.access_token) {
        return <Navigate to="/auth" />;
      }
      const fetchUser = async () => {
        try{
        const user = await axiosClient.get(`auth/user/${cookies.userID}`);
        console.log(user.data)
        setusername(user.data.name)
        setavailableMoney(user.data.availableMoney)
        }
        catch(err)
        {
            console.log(err)
        }
      };
      useEffect(() => {
        fetchUser();
      }, []);
    const handleLogout= ()=>{
       removeCookies('access_token')
       removeCookies('userID')
       console.log(cookies)
       navigate('/auth')
    }
  return (
    <>
    <Navbar/>
    <div className='profile-container'>
        <div>NAME : {username}</div>
        <div>BALANCE : {availableMoney}</div>
        <div>USER: {cookies.userID}</div>
        <button className='logout-btn' onClick={handleLogout}>LOGOUT</button>
    </div>
    </>
  )
}

export default Profile