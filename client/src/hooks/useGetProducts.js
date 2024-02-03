import axiosClient from "../../../admin/src/services/axiosClient";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await axiosClient.get("admin/products");
    setProducts(products.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};