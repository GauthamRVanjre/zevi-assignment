import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <article>
        <h1>Product id - {id}</h1>
      </article>
    </>
  );
};

export default ProductDetails;
