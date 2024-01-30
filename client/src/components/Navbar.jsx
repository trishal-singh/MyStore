import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className="logo">MyStore</div>
        <div className='nav-btns'>
            <div>SHOP</div>
            <div>ABOUT</div>
        </div>
        <div className='shop-btns'>
            <div>CART</div>
            <div>USER</div>
        </div>
    </nav>
  )
}

export default Navbar