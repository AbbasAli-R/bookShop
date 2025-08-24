
import { Menu, X, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-transparent shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center container mx-auto md:py-6 py-4 px-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="py-2 px-2 rounded">
            <img
              src={logo}
              alt="logo"
              className="w-28 sm:w-32 md:w-36 lg:w-40"
            />
          </Link>
        </div>

        {/* Search bar (desktop only) */}
        <form className="hidden sm:block w-1/2 max-w-md">
          <input
            type="text"
            placeholder="Search product..."
            className="bg-transparent rounded-3xl border border-stone-500 focus:outline-none py-2 px-3 w-full text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </form>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden border border-stone-500 p-2 rounded-md"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Cart */}
          <div className="relative">
            <Link to="/cart">
              <ShoppingBag
                size={40}
                className="cursor-pointer px-2 py-1 text-stone-700"
              />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown (opens under navbar) */}
      {isOpen && (
        <div className="sm:hidden px-3 pb-3 space-y-3">
          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search product..."
            className="bg-transparent rounded-3xl border border-stone-500 focus:outline-none py-2 px-3 w-full text-sm"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
