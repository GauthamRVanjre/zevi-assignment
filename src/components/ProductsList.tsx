import React, { useEffect, useState } from "react";
import { productType } from "../types";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  searchTerm: string;
}

const ProductsList: React.FC<ProductsListProps> = ({ searchTerm }) => {
  const [productsList, setProductsList] = useState<productType[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProductsList(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:mr-10 md:grid-cols-3 gap-4 md:mr-10">
        {productsList &&
          productsList
            .filter((product: productType) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })

            .map((product: productType) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default ProductsList;
