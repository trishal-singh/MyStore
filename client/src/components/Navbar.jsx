import React from 'react'
import './Navbar.css'
import { FaCartPlus,FaUser } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav>
        <div className="logo">MyStore</div>
        <div className='nav-btns'>
            <div>SHOP</div>
            <div>ABOUT</div>
        </div>
        <div className='shop-btns'>
            <div className='nav-cart'><FaCartPlus/></div>
            <div className='nav-user'><FaUser/></div>
            
        </div>
    </nav>
  )
}

export default Navbar