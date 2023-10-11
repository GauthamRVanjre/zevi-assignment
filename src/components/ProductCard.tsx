import React, { useState } from "react";
import { productType } from "../types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: productType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-10 hover:shadow-2xl transition duration-500 ease-in-out"
        onMouseEnter={() => setShowContent(true)}
        onMouseLeave={() => setShowContent(false)}
      >
        <img
          className="w-full h-[250px] p-2 object-cover"
          src={product.images[0]}
          alt="product"
        />
        <div className="font-bold text-xl mb-2 pl-2">{product.title}</div>
        {showContent && (
          <>
            <div className="transition duration-700 ease-in-out">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{product.category}
              </span> */}
                <div>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Product
                  </Link>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductCard;
