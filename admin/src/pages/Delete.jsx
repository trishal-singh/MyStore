
import Item from '../components/Item'
import './Delete.css'
import axiosClient from "../services/axiosClient"
import { useEffect, useState } from 'react'
const Delete = () => {
  
  const [items,setItems]=useState([])
  useEffect(()=>{
    axiosClient.get('admin/products')
    .then((res)=>setItems(res.data))
    .catch((err)=> console.log(err))
  },[])
 
  return (<>
    <h1>Products</h1>
    {
     items.map((item)=>(
      <Item  item={item}/>
    ))
    }
    </>
  )
}

export default Delete