import React from 'react'
import './Container.css'
const Container = (props) => {
  return (
    <div className='product-details'>
        <img src={props.item.Image} height="200px"/>
        <div>Name: {props.item.Name}</div>
        <div>Price: {props.item.Price}</div>
        <button className='buy-btn'>ADD TO CART</button>
    </div>
  )
}

export default Container