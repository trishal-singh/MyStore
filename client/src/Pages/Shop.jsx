import React from 'react'
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import Navbar from '../components/Navbar';
const Shop = () => {
    const [cookies, _] = useCookies(["access_token"]);
    if (!cookies.access_token) {
        return <Navigate to="/auth" />;
      }
  return (<>
          <Navbar/>
          <div>Shop</div>
          
         </>
    
  )
}

export default Shop