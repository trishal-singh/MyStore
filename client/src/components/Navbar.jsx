import React from 'react'
import './Navbar.css'
import { FaCartPlus,FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router'
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <nav>
        <div className="logo">MyStore</div>
        <div className='nav-btns'>
            <div onClick={()=>navigate('/')}>SHOP</div>
            <div onClick={()=>navigate('/about')}>ABOUT</div>
        </div>
        <div className='shop-btns'>
            <div className='nav-cart'><FaCartPlus/></div>
            <div className='nav-user' onClick={()=>navigate('/user')}><FaUser/></div>
            
        </div>
    </nav>
  )
}

export default Navbar