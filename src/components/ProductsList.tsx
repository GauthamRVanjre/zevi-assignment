import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [productsList, setProductsList] = useState();

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProductsList(data);
    console.log("data", data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <></>;
};

export default ProductsList;
