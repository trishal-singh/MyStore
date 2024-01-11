import React from 'react'
import Button from './Button'
import './Item.css'
import axiosClient from '../services/axiosClient'
const Item = (props) => {
    const handleDelete = async (id)=>{
        console.log('admin/product/'+{id})
        try{
           await axiosClient.delete(`admin/product/${id}`)
           console.log("done")
        }
        catch(e){
         console.log("Unable to delete item")
        }
        
    }
  return (
    <div className='item-container'>
    <div>{props.item.Name}</div>
    <div>{props.item.Category}</div>
    <div>{props.item.Gender}</div>
    <div>{props.item.Price}</div>
    <button onClick={()=> handleDelete(props.item._id)}>DELETE</button>
    
    </div>
  )
}

export default Item