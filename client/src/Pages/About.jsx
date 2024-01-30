import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import { useNavigate } from 'react-router'
const About = () => {
    const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <main>
    <p>Welcome to MyStore , your one stop shop for your fashion needs.</p>
    <button className='mybutton' onClick={()=>navigate('/')}>SHOP NOW</button>
    </main>
    </>
    
  )
}

export default About