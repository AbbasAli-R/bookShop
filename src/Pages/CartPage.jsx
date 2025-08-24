
import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/cart/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Your Cart is Empty</h2>
          <Link
            to="/"
            className="inline-block bg-zinc-200 px-4 sm:px-6 py-2 rounded-lg hover:bg-zinc-300 text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 shadow-md p-3 sm:p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b"
            >
              {/* Product Image */}
              <Link to={`/product/${item.id}`} className="flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 sm:w-24 sm:h-24 object-contain rounded"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1 text-center sm:text-left">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-blue-600 block text-sm sm:text-base"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600 text-sm sm:text-base">₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                  <button
                    className="p-1 rounded-full hover:bg-gray-100"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(0, item.quantity - 1),
                        })
                      )
                    }
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm sm:text-base">{item.quantity}</span>
                  <button
                    className="p-1 rounded-full hover:bg-gray-100"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    <Plus size={16} />
                  </button>
                  <div
                    className="ml-2 sm:ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={18} />
                  </div>
                </div>
              </div>

              {/* Item Total */}
              <div className="text-center sm:text-right">
                <p className="font-bold text-sm sm:text-base">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-stone-700 shadow-md p-4 sm:p-6 rounded-md text-stone-400">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-slate-700 text-gray-400 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-400 hover:text-slate-700 cursor-pointer transform transition active:scale-95 duration-150 text-sm sm:text-base">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
