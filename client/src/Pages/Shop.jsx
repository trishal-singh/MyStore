import React from 'react'
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { useGetProducts } from '../hooks/useGetProducts';
import './Shop.css'
const Shop = () => {
    const [cookies, _] = useCookies(["access_token"]);
    const { products } = useGetProducts();
    if (!cookies.access_token) {
        return <Navigate to="/auth" />;
      }
  return (<>
          <Navbar/>
          <div className='container'>
          {
            products.map((product)=>(
             <Container item={product}/>
            ))
          }
          </div>
         </>
    
  )
}

export default Shop