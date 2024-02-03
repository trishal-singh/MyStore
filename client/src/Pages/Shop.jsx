import React from 'react'
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { useGetProducts } from '../hooks/useGetProducts';
const Shop = () => {
    const [cookies, _] = useCookies(["access_token"]);
    const { products } = useGetProducts();
    console.log(products)
    if (!cookies.access_token) {
        return <Navigate to="/auth" />;
      }
  return (<>
          <Navbar/>
          <div>Shop</div>
          {
          products.map((product)=>(
            <p>{product.Name}</p>
          ))
         }
         </>
    
  )
}

export default Shop