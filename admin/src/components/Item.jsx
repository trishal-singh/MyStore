import React from 'react'
import Button from './Button'
import './Item.css'
const Item = (props) => {
    
  return (
    <div className='item-container'>
    <div>{props.item.Name}</div>
    <div>{props.item.Category}</div>
    <div>{props.item.Gender}</div>
    <div>{props.item.Price}</div>
    <button >DELETE</button>
    
    </div>
  )
}

export default Item