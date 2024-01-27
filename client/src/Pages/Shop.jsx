import React from 'react'
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
const Shop = () => {
    const [cookies, _] = useCookies(["access_token"]);
    if (!cookies.access_token) {
        return <Navigate to="/auth" />;
      }
  return (
    <div>Shop</div>
  )
}

export default Shop