
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.title}
          className="p-3 sm:p-4 w-full h-40 sm:h-48 md:h-56 object-contain bg-stone-900 border-b border-b-stone-300"
        />

        {/* Content Section */}
        <div className="p-3 sm:p-4 bg-stone-900 flex flex-col flex-grow">
          <h2 className="text-sm sm:text-base font-semibold mb-2 line-clamp-1 text-stone-400">
            {product.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-100 line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-3 sm:mt-4">
            <p className="text-base sm:text-lg font-bold text-stone-300">
              ₹{product.price}
            </p>
            <span className="text-xs sm:text-sm text-neutral-600 font-medium hover:underline">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
