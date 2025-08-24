
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-10">
      <div>
        {/* Back Button */}
        <Link
          to="/"
          className="mb-6 sm:mb-8 inline-block bg-gray-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
        >
          Back to Products
        </Link>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start border border-amber-950 rounded-lg p-4 sm:p-6">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="shadow-md p-3 sm:p-4 rounded w-[220px] sm:w-[250px] md:w-[300px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {product.description}
            </p>

            <div className="mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold">
                ₹{product.price}
              </span>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                Category
              </h3>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm">
                {product.category}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full md:w-auto text-stone-400 bg-stone-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md flex items-center justify-center gap-2 
              hover:bg-stone-300 hover:text-stone-800 cursor-pointer 
              transform transition active:scale-95 duration-150 text-sm sm:text-base"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
